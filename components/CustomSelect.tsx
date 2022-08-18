import React from 'react';
import Select from 'react-select';

function CustomSelect({ onChange, options, value, className }) {

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : "";
    };

    return (
        <div className={className}>
            <Select
                value={defaultValue(options, value)}
                onChange={value => {
                    onChange(value)

                }} options={options}
                instanceId={1}

            />
        </div>

    )
}
export default CustomSelect 