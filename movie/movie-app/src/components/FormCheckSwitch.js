const FormCheckSwitch = ({ isChecked, onChange }) => {
    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked={isChecked}
                onChange={onChange}
            />
            <label
                className="form-check-label"
                for="flexSwitchCheckChecked"
            >
                Publish
            </label>
        </div>
    );
}

export default FormCheckSwitch;