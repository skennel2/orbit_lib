import * as React from 'react';
/**
 * Component 공통
 * @author 김철희
 */

class EventArgs {
    /**
     * 기본 EventArgs.
     * 모든 EventArgs 는 이 class 를 super class 로 사용해야 한다.
     * @param {React.Component} target 이벤트 생성자
     * {@code invokeEvent(this.props.onFocused, new EventArgs(this))}
     * @see invokeEvent
     */
    constructor(public readonly target: any) {
    }
}

class ValueEventArgs<T> extends EventArgs {
    /**
     * Value 속성을 제공하는 EventArgs
     * @param {React.Component} target 이벤트 생성자
     * @param {*} value 값
     * {@code invokeEvent(this.props.onChange, new ValueEventArgs(this, value))}
     * @see EventArgs
     * @see invokeEvent
     */
    constructor(target: any, public readonly value: T) {
        super(target);
    }
}

class CancellationEventArgs extends EventArgs {
    public cancel: boolean = false;

    /**
     * Cancel 을 지원하는 EventArgs
     * @param {React.Component} target 이벤트 생성자
     * {@code if (!invokeEvent(this.props.onBeforeChange, new CancellationEventArgs(this))) return;}
     * @see EventArgs
     * @see invokeEvent
     */
    constructor(target: any) {
        super(target);
    }
}

class CancellationValueEventArgs<T> extends CancellationEventArgs {
    /**
     * Cancel 을 지원하는 oldValue, newValue 를 제공하는 EventArgs
     * oldValue 와 newValue 를 비교하여 cancel 을 true 로 부여하면 추후 이벤트 동작 중지와 같은 코드에서 사용함.
     * @param {React.Component} target 이벤트 생성자
     * @param {*} oldValue 수정전 값
     * @param {*} newValue 수정후 값
     * {@code if (!invokeEvent(this.props.onBeforeChange, new CancellationEventArgs(this, oldValue, newValue))) return;}
     * @see CancellationEventArgs
     * @see invokeEvent
     */
    constructor(target: any, public readonly oldValue: T, public readonly newValue: T) {
        super(target);
    }
}

class BeforeEventArgs<T> extends CancellationEventArgs {
    /**
     * Before - Validating - After 형태의 이벤트 셋의 Before EventArgs
     * @param {React.Component} target
     * @param {*} value
     * {@code if (!invokeEvent(this.props.onBeforeChange, new BeforeEventArgs(this, value))) return;}
     * @see invokeEvent
     */
    constructor(target: any, public readonly value: T) {
        super(target);
    }
}

class ValidatingEventArgs<T> extends CancellationValueEventArgs<T> {

    /**
     * Before - Validating - After 형태의 이벤트 셋의 Validating EventArgs
     * @param {React.Component} target
     * @param {*} value
     * {@code if (!invokeEvent(this.props.onBeforeChange, new ValidatingEventArgs(this, oldValue, newValue))) return;}
     * @see invokeEvent
     */
    constructor(target: any, oldValue: T, newValue: T) {
        super(target, oldValue, newValue);
    }
}

class AfterEventArgs<T> extends EventArgs {
    /**
     * Before - Validating - After 형태의 이벤트 셋의 After EventArgs
     * @param {React.Component} target 이벤트 생성자
     * @param {*} oldValue 수정전 값
     * @param {*} newValue 수정후 값
     * {@code invokeEvent(this.props.onBeforeChange, new AfterEventArgs(this, oldValue, newValue))}
     * @see invokeEvent
     */
    constructor(target: any, public readonly oldValue: T, public readonly newValue: T) {
        super(target);
    }
}

class MoveFocusEventArgs extends EventArgs {
    /**
     * 이동방향
     */
    static readonly Direction = {
        left: 'left',
        up: 'up',
        right: 'right',
        down: 'down'
    };

    private _direction: string;

    get direction() { return this._direction; }

    /**
     * onMoveFocus 이벤트의 EventArgs
     * @param {React.Component} target
     * @param {*} direction MoveFocusEventArgs.Direction 사용 ( left, up, right, down )
     * {@code onMoveFocus(direction) { invokeEvent(this.props.onMoveFocus, new MoveFocusEventArgs(this, this.state.value, direction)) }}
     */
    constructor(target: any, direction: string) {
        super(target);
        switch (direction.toLowerCase()) {
            case 'enter':
                this._direction = MoveFocusEventArgs.Direction.right;
                break;
            default:
                this._direction = direction;
                break;
        }
    }
}

/**
 * 이벤트 호출 지원 함수
 * args 에 cancel 이 지원되고, 호출 결과 cancel = true 로 설정되었다면 false 를 리턴함. 그 외 true 리턴
 * @param {Function} event 호출할 이벤트(=callback)
 * @param {EventArgs} args EventArgs 에서 파생된 class
 * @returns {boolean} cancel = true 라면 false, 그 외 true
 * {@code if (!invokeEvent(this.props.onBeforeChange, new CancellationEventArgs(this, this.state.value, e.target.value))) return;}
 * @see CancellationEventArgs
 */
function invokeEvent<T extends EventArgs>(event: (e: T) => void, args: T): boolean {
    if (event && args) {
        event.call(null, args);
        if (args instanceof CancellationEventArgs && (<CancellationEventArgs>args).cancel === true) {
            return false;
        }
    }
    return true;
}

/**
 * 클래스명을 지정할때 여러 클래스명을 연결하거나, null, '' 인 클래스명을 제외할 때 사용한다.
 * 조건에 따라 클래스명을 지정해야 할때 사용하면 효과적이다.
 * @param {string[]} classNames 연결할 클래스명. null이나 '' 빈값이 들어오면 제외된다.
 * @returns {string} 연결된 클래스 명
 * {@code
 *  const classNames = getClassNames(this.props.required ? styles.required : null, this.props.disabled ? styles.disabled : null);
 *  <div className={classNames} />}
 */
function getClassNames(...classNames: string[]): string {
    return classNames.filter(className => className && className.length > 0).join(' ');
}

export {
    EventArgs,
    CancellationEventArgs,
    ValueEventArgs,
    CancellationValueEventArgs,
    MoveFocusEventArgs,
    BeforeEventArgs,
    ValidatingEventArgs,
    AfterEventArgs,
    invokeEvent,
    getClassNames
};
