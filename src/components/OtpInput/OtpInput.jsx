
import { useEffect, useMemo } from "react";


const RE_DIGIT = new RegExp(/^\d+$/);

export default function OtpInput({ value, valueLength, onChange }) {

    const valueItems = useMemo(() => {
        const valueArray = value.split('');
        const items = [];

        for (let i = 0; i < valueLength; i++) {
            const char = valueArray[i];

            if (RE_DIGIT.test(char)) {
                items.push(char);
            } else {
                items.push('');
            }
        }

        return items;
    }, [value, valueLength]);





    const focusToNextInput = (target) => {
        const nextElementSibling =
            target.nextElementSibling ;

        if (nextElementSibling) {
            nextElementSibling.focus();
        }
    };

    const focusToPrevInput = (target) => {
        const previousElementSibling =
            target.previousElementSibling ;

        if (previousElementSibling) {
            previousElementSibling.focus();
        }
    };



    const inputOnChange = async (
        e,
        idx
    ) => {

        const target = e.target;
        let targetValue = target.value.trim();
        const isTargetValueDigit = RE_DIGIT.test(targetValue);

        if (!isTargetValueDigit && targetValue !== '') {
            return;
        }

        const nextInputEl = target.nextElementSibling ;

        // only delete digit if next input element has no value
        if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== '') {
            return;
        }


        targetValue = isTargetValueDigit ? targetValue : ' ';

        const targetValueLength = targetValue.length;


        if (targetValueLength === 1) {
            const newValue =
                value.substring(0, idx) + targetValue + value.substring(idx + 1);

            await onChange(newValue);

            if (!isTargetValueDigit) {
                return;
            }


            focusToNextInput(target);

            const nextElementSibling =
                target.nextElementSibling;

            if (nextElementSibling) {
                nextElementSibling.focus();
            }

        } else if (targetValueLength === valueLength) {
            onChange(targetValue);
            target.blur();
        }


    };


    const inputOnKeyDown = (e) => {
        const { key } = e;
        const target = e.target ;

        if (key === 'ArrowRight' || key === 'ArrowDown') {
            e.preventDefault();
            return focusToNextInput(target);
        }

        if (key === 'ArrowLeft' || key === 'ArrowUp') {
            e.preventDefault();
            return focusToPrevInput(target);
        }

        const targetValue = target.value;

        if (e.key !== 'Backspace' || target.value !== '') {
            return;
        }

        const previousElementSibling =
            target.previousElementSibling ;

        if (previousElementSibling) {
            previousElementSibling.focus();
        }

        focusToPrevInput(target);
    };


    const inputOnFocus = (e) => {
        const { target } = e;

        const prevInputEl =
            target.previousElementSibling 

        if (prevInputEl && prevInputEl.value === '') {
            return prevInputEl.focus();
        }

        target.setSelectionRange(0, target.value.length);
    };

    return (
        <div className="otp-group">
            {valueItems.map((digit, idx) => (
                <input
                    key={idx}
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    pattern="\d{1}"
                    maxLength={valueLength}
                    className="otp-input text-[14px]"
                    value={digit}
                    onChange={(e) => inputOnChange(e, idx)}
                    onKeyDown={inputOnKeyDown}
                    onFocus={inputOnFocus}
                />
            ))}
        </div>
    );
}