import { useState } from "react";
import "../utils/countrycodedropdown.css";
const MobileNumberDropdown = ({ onChange }) => {
    const [countryCode, setCountryCode] = useState('+1'); // Default country code

    const handleCountryCodeChange = (event) => {
        setCountryCode(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    };

    // Static list of country codes
    const countryCodes = [
        { code: '+1', label: 'USA' },
        { code: '+44', label: 'UK' },
        { code: '+91', label: 'India' },
        { code: '+81', label: 'Japan' },
        // Add more country codes as needed
    ];

    return (
        <div className="mobile-number-dropdown">
            <select value={countryCode} onChange={handleCountryCodeChange}>
                {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                        {country.label} ({country.code})
                    </option>
                ))}
            </select>
        </div>
    );
};

export default MobileNumberDropdown;
