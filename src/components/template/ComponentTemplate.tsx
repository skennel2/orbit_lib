/**
 * Component Develment Template
 * Luna - Orbit 개발시 템플릿 으로 사용.
 * @version 0.1
 * @author 김철희
 * @see common.js
 */
import * as React from 'react';
import * as Common from '../Common';
/**
 * CSS Modules 사용방식
 * styles.[className]
 * {@code <div className={Common.}}
 */
const styles = require('./ComponentTemplate.module.sass');

/**
 * PropType 및 Default 정의
 * @see getPropTypes
 * @see getDefaultProps
 */
interface Props {
    disabled: boolean,
    readonly: boolean,
    required: boolean,
    value: string,
    onBeforeChange?: (value: Common.BeforeEventArgs<string>) => void,
    onValidateChange?: (value: Common.ValidatingEventArgs<string>) => void,
    onAfterChange?: (value: Common.AfterEventArgs<string>) => void,
    onMoveFocus?: (value: Common.MoveFocusEventArgs) => void
}

interface State {
}

export class ComponentTemplate extends React.Component<Props, State> {
    ///////////////////////////////////////////////////////////////////////////// Initialize
    /**
     * Default Props 설정
     */
    static defaultProps: Props = {
        disabled: false,
        readonly: false,
        required: false,
        value: ''
    }

    /**
     * State 정의
     */
    state: State = {}

    /**
     * Ref 정의
     */
    ref = {
        ref: React.createRef<HTMLDivElement>()
    }

    ///////////////////////////////////////////////////////////////////////////// Life Cycle API
    /**
     * component 의 dom 이 생성된 다음 호출된다.
     * jquery 등의 외부 라이브러리 로드에 사용된다.
     * {@code componentDidMount() {
     *     this.ref.input.focus();
     * }}
     */
    componentDidMount(): void { }

    /**
     * component 의 prop 이 변경되었을 경우 state 가 변경되어야 할때 호출된다.
     * @param {json} nextProps
     * @param {json} prevProps
     * @returns {json} 변경될 state / 갱신이 불필요 할경우 null
     * {@code static getDerivedStateFromProps(nextProps, prevState) {
     *     let state = {};
     *     if (prevState.value !== nextProps.value) {
     *         state = { value: nextProps.value };
     *     }
     *
     *     return (Object.keys(state) || 0).length <= 0 ? null : state;
     * }}
     */
    static getDerivedStateFromProps(nextProps: Props, prevState: State): any { }

    /**
     * component 의 state 나 props 이 변경되었을 경우 업데이트 여부를 리턴할 수 있는 메서드
     * @param {json} nextProps
     * @param {json} nextState
     * @returns {boolean} true 를 리턴하면 getSnapshotBeforeUpdate 메서드 실행됨.
     */
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
        return true;
    }

    /**
     * component 가 render 직전에 호출됨 return 되는 값은 componentDidUpdate 의 snapshot 으로 전달된다.
     * @param {json} prevProps
     * @param {json} prevState
     * @returns {*} componentDidUpdate 로 전달될 값
     */
    getSnapshotBeforeUpdate(prevProps: Props, prevState: State): any { }

    /**
     * render 이후 호출.
     * @param {json} prevProps
     * @param {json} prevState
     * @param {*} snapshot
     * @see #getSnapshotBeforeUpdate
     */
    componentDidUpdate(prevProps: Props, prevState: State, snapshot: any): void { }

    /**
     * component 가 DOM 에서 제거될 때 호출됨.
     */
    componentWillUnmount(): void { }

    // component 가 render 될때 호출됨.
    render(): any {
        const className = Common.getClassNames(
            this.props.readonly ? styles.readonly : null,
            this.props.disabled ? styles.disabled : null,
            this.props.required ? styles.required : null
        );
        return (
            <>
                <div className={className} ref={this.ref.ref} />
            </>
        )
    }

    ///////////////////////////////////////////////////////////////////////////// Logics
    get canEdit(): boolean {
        return !this.props.disabled && !this.props.readonly;
    }

    invokeMoveFocusEvent(direction: string): void {
        Common.invokeEvent<Common.MoveFocusEventArgs>(this.props.onMoveFocus, new Common.MoveFocusEventArgs(this, direction));
    }

    ///////////////////////////////////////////////////////////////////////////// Event Handlers
    /**
     * Luna - Rocket 의 onMoveFocus 이벤트 핸들러를 받아 재호출
     * @param {string} direction
     */
    onMoveFocus(direction: string): void {
        this.invokeMoveFocusEvent(direction);
    }

    /**
     * Before, Validating, After 이벤트 처리 예제
     * Input 컴포넌트를 예로 들었을 때 Focus 가 진입할때 Editing Mode 로 진입되므로 Focus 시에 Before Change 를 호출한다.
     * 컴포넌트 사용자는 Before Change 에서 수정가능여부를 판단하여 수정하지 못하도록 건너뛰도록 (MoveFocus) 하거나,
     * 컴포넌트의 설정 ( Mask Format 등 ) 등을 변경하는 행위를 할 수 있다.
     */
    onFocus(): void {
        if (!this.canEdit) {
            // Before Event 호출
            const value = this.props.value;
            if (!Common.invokeEvent<Common.BeforeEventArgs<string>>(this.props.onBeforeChange, new Common.BeforeEventArgs<string>(this, value))) {
                this.invokeMoveFocusEvent(Common.MoveFocusEventArgs.Direction.right);
            }
        }
    }

    /**
     * Input 컴포넌트의 Change 이벤트가 발생했을 경우 내부 state 를 변경하기 전에 Validating 이벤트를 호출하여 사용자가 유효성체크를 하도록 할 수 있다.
     * Validating 이 끝난다음 내부 state 를 변경하는 등 변경작업을 거친 후, After 이벤트를 호출하여 변경되었음을 알린다.
     * @param {*} newValue
     */
    onChanged(newValue: string): void {
        const oldValue: string = this.props.value;
        if (this.canEdit && oldValue !== newValue) {
            // Validating 호출
            if (!Common.invokeEvent<Common.ValidatingEventArgs<string>>(this.props.onValidateChange, new Common.ValidatingEventArgs<string>(this, oldValue, newValue)))
                return;

            // After Event 호출
            Common.invokeEvent<Common.AfterEventArgs<string>>(this.props.onAfterChange, new Common.AfterEventArgs<string>(this, oldValue, newValue));
        }
    }
}
