import '../styles/personalDataStyle.css';

export default function PersonalDataScreen() {
    return (
        <div className="text-container">
            <h2>Personal Data Section:</h2>

            <p>Your privacy is important to us. In this section, we outline how we handle your personal data.</p>

            <ol>
                <li>
                    <p>
                        <strong>Data Collection:</strong> We collect certain personal information when you use our application. This may include but is not limited to your name, email address, and any other details you provide voluntarily.
                    </p>
                </li>

                <li>
                    <p>
                        <strong>Data Usage:</strong> The personal data we collect is used for the purpose of [describe the purpose, e.g., processing article submissions, providing personalized content, etc.]. We do not sell or share your data with third parties without your explicit consent.
                    </p>
                </li>

                <li>
                    <p>
                        <strong>Data Security:</strong> We take the security of your personal data seriously. We implement measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
                    </p>
                </li>

                <li>
                    <p>
                        <strong>Cookies:</strong> We may use cookies to enhance your user experience. You can manage your cookie preferences in your browser settings.
                    </p>
                </li>

                <li>
                    <p>
                        <strong>Third-Party Services:</strong> Our application may use third-party services for analytics, advertising, or other purposes. These services may collect information about your use of our app.
                    </p>
                </li>

                <li>
                    <p>
                        <strong>Your Rights:</strong> You have the right to access, correct, or delete your personal information. If you have any concerns or requests regarding your data, please contact us at [your contact email].
                    </p>
                </li>

                <li>
                    <p>
                        <strong>Policy Changes:</strong> We reserve the right to update this privacy policy as needed. Any changes will be reflected on this page.
                    </p>
                </li>
            </ol>

            <p>
                By using our application, you agree to the terms outlined in this "Personal Data" section. For more details, please refer to our complete{' '}
                <a href="link to your full privacy policy">Privacy Policy</a>.
            </p>

            <p>
                If you have any questions or concerns, please contact us at{' '}
                <a href="your contact email">your contact email</a>.
            </p>
        </div>
    );
};