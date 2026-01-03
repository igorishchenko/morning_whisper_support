import React from 'react'
import { Link } from 'react-router-dom'
import './Page.css'

function PrivacyPolicy() {
  return (
    <div className="page">
      <h1>Privacy Policy for Morning Whisper</h1>
      <p className="last-updated"><strong>Last Updated:</strong> [Date]</p>

      <section className="policy-section">
        <h2>Introduction</h2>
        <p>
          Morning Whisper ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our mobile application Morning Whisper (the "App").
        </p>
        <p>
          By using the App, you agree to the collection and use of information in accordance with this policy.
        </p>
      </section>

      <section className="policy-section">
        <h2>Entertainment and Disclaimer</h2>
        <p>
          <strong>Important:</strong> Morning Whisper is provided solely for entertainment and fun purposes. The predictions, whispers, and content provided by the App are generated for amusement and should not be taken as professional advice, guidance, or factual information.
        </p>
        <p>
          <strong>No Responsibility for User Actions:</strong> We are not responsible for any decisions, actions, or consequences that may result from your use of this App. The App's content is provided "as is" for entertainment purposes only, and you acknowledge that:
        </p>
        <ul>
          <li>The predictions and content are not based on any scientific, professional, or factual basis</li>
          <li>You should not rely on the App's content for making important life decisions</li>
          <li>You are solely responsible for your own actions and decisions</li>
          <li>We disclaim any liability for any loss, damage, or harm that may arise from your use of the App or reliance on its content</li>
        </ul>
        <p>
          By using the App, you agree that you will not hold us liable for any outcomes resulting from your interpretation or use of the App's entertainment content.
        </p>
      </section>

      <section className="policy-section">
        <h2>Information We Collect</h2>
        
        <h3>Information Stored Locally on Your Device</h3>
        <p>
          The App stores the following information locally on your device using secure local storage:
        </p>
        
        <ul>
          <li>
            <strong>App Usage Data</strong>:
            <ul>
              <li>App open times and dates</li>
              <li>Daily session information</li>
              <li>Usage patterns and frequency</li>
            </ul>
          </li>
          <li>
            <strong>App Preferences</strong>:
            <ul>
              <li>Language preference (English, Spanish, or French)</li>
              <li>Category preferences for predictions</li>
              <li>Notification schedule settings (if enabled)</li>
            </ul>
          </li>
          <li>
            <strong>App Activity Data</strong>:
            <ul>
              <li>Streak count and last streak date</li>
              <li>Seen predictions to avoid duplicates</li>
              <li>Today's predictions (whisper and coffee predictions)</li>
              <li>Last button usage dates</li>
              <li>Milestones reached</li>
            </ul>
          </li>
          <li>
            <strong>Anonymous Analytics Events</strong>:
            <ul>
              <li>App opened events</li>
              <li>Prediction generated events</li>
              <li>Cycle reset events</li>
              <li>Streak reached events</li>
            </ul>
          </li>
        </ul>

        <p>
          <strong>Important</strong>: All of this data is stored exclusively on your device and is never transmitted to our servers or third parties (except as described below for advertising).
        </p>

        <h3>Information We Do NOT Collect</h3>
        <p>We do NOT collect:</p>
        <ul>
          <li>Personal identification information (name, email address, phone number)</li>
          <li>Account information (the App does not require account creation)</li>
          <li>Location data</li>
          <li>Contact information</li>
          <li>Device identifiers (except as required by advertising services)</li>
          <li>Payment information</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>How We Use Your Information</h2>
        
        <h3>Local Data Usage</h3>
        <p>
          The information stored locally on your device is used solely to:
        </p>
        <ul>
          <li>Provide personalized predictions based on your preferences</li>
          <li>Track your daily streak and milestones</li>
          <li>Remember your language preference</li>
          <li>Manage notification schedules (if enabled)</li>
          <li>Improve app functionality and user experience</li>
          <li>Prevent showing duplicate predictions</li>
        </ul>

        <h3>Third-Party Services</h3>
        
        <h4>Google AdMob</h4>
        <p>
          The App uses Google AdMob to display advertisements. Google AdMob may collect and use information about your device and app usage to provide personalized ads. This may include:
        </p>
        <ul>
          <li>Device identifiers (such as advertising ID)</li>
          <li>IP address</li>
          <li>App usage data</li>
          <li>Device information (model, operating system version)</li>
        </ul>
        <p>
          Google's use of information collected through AdMob is governed by Google's Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
        </p>
        <p>
          You can opt out of personalized advertising by adjusting your device's advertising settings:
        </p>
        <ul>
          <li><strong>Android</strong>: Settings → Google → Ads → Opt out of Ads Personalization</li>
          <li><strong>iOS</strong>: Settings → Privacy → Apple Advertising → Limit Ad Tracking</li>
        </ul>

        <h4>Expo Notifications</h4>
        <p>
          If you enable push notifications, we use Expo's notification service to deliver notifications to your device. This service requires:
        </p>
        <ul>
          <li>Device token for notification delivery</li>
          <li>Notification preferences you configure in the App</li>
        </ul>
        <p>
          Notification data is processed by Expo and is subject to Expo's Privacy Policy: <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer">https://expo.dev/privacy</a>
        </p>
      </section>

      <section className="policy-section">
        <h2>Data Storage and Security</h2>
        
        <h3>Local Storage</h3>
        <p>
          All user data is stored locally on your device using secure local storage mechanisms provided by the operating system. This data:
        </p>
        <ul>
          <li>Remains on your device</li>
          <li>Is not transmitted to external servers (except for advertising services)</li>
          <li>Can be deleted by uninstalling the App</li>
        </ul>

        <h3>Data Retention</h3>
        <ul>
          <li><strong>Local Data</strong>: Stored on your device until you uninstall the App or clear app data</li>
          <li><strong>Analytics Events</strong>: Limited to the last 1,000 events to prevent excessive storage usage</li>
          <li><strong>Advertising Data</strong>: Governed by Google AdMob's data retention policies</li>
        </ul>

        <h3>Data Security</h3>
        <p>We implement appropriate technical measures to protect your data:</p>
        <ul>
          <li>Data is stored using secure local storage APIs</li>
          <li>No sensitive personal information is collected or stored</li>
          <li>All data remains on your device</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Your Rights and Choices</h2>
        
        <h3>Access and Deletion</h3>
        <p>You have the right to:</p>
        <ul>
          <li><strong>Access your data</strong>: All data is stored locally on your device and can be viewed through the App's analytics dashboard (if available)</li>
          <li><strong>Delete your data</strong>: Uninstall the App to remove all locally stored data</li>
          <li><strong>Clear specific data</strong>: Use your device's app settings to clear app data</li>
        </ul>

        <h3>Advertising Preferences</h3>
        <p>You can control personalized advertising:</p>
        <ul>
          <li>Adjust your device's advertising ID settings</li>
          <li>Opt out of personalized ads through device settings</li>
          <li>Note: You may still see ads, but they will be less relevant</li>
        </ul>

        <h3>Notification Preferences</h3>
        <p>You can control notifications:</p>
        <ul>
          <li>Enable or disable notifications through the App's settings</li>
          <li>Configure notification schedules</li>
          <li>Disable notifications through your device settings</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Children's Privacy</h2>
        <p>
          The App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
        </p>
      </section>

      <section className="policy-section">
        <h2>International Users</h2>
        <p>
          If you are using the App from outside the United States, please note that:
        </p>
        <ul>
          <li>Data is stored locally on your device</li>
          <li>No data is transferred across international borders by our App</li>
          <li>Third-party services (Google AdMob, Expo) may process data according to their own privacy policies</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by:
        </p>
        <ul>
          <li>Posting the new Privacy Policy in the App</li>
          <li>Updating the "Last Updated" date at the top of this policy</li>
        </ul>
        <p>
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted.
        </p>
      </section>

      <section className="policy-section">
        <h2>Third-Party Privacy Policies</h2>
        <p>
          This Privacy Policy does not apply to third-party services used in the App. We encourage you to review the privacy policies of:
        </p>
        <ul>
          <li><strong>Google AdMob</strong>: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
          <li><strong>Expo</strong>: <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer">https://expo.dev/privacy</a></li>
          <li><strong>Google Play Store</strong>: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Data Sharing</h2>
        <p>
          We do NOT sell, trade, or rent your personal information to third parties. The only data sharing that occurs is:
        </p>
        <ol>
          <li><strong>Advertising Data</strong>: Shared with Google AdMob for ad delivery (as described above)</li>
          <li><strong>Notification Data</strong>: Shared with Expo for notification delivery (if notifications are enabled)</li>
        </ol>
      </section>

      <section className="policy-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p>
          <strong>Email</strong>: ischenko.vadyus@gmail.com<br />
          <strong>App Support</strong>: ischenko.vadyus@gmail.com
        </p>
        <p>
          Or visit our <Link to="/contact">Contact Support</Link> page.
        </p>
      </section>

      <section className="policy-section">
        <h2>Compliance</h2>
        <p>
          This Privacy Policy is designed to comply with:
        </p>
        <ul>
          <li>General Data Protection Regulation (GDPR)</li>
          <li>California Consumer Privacy Act (CCPA)</li>
          <li>Children's Online Privacy Protection Act (COPPA)</li>
          <li>Google Play Store requirements</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Consent</h2>
        <p>
          By using the App, you consent to:
        </p>
        <ul>
          <li>The collection and use of information as described in this Privacy Policy</li>
          <li>The use of third-party services (Google AdMob, Expo) as described</li>
          <li>The storage of data locally on your device</li>
        </ul>
        <p>
          If you do not agree with this Privacy Policy, please do not use the App.
        </p>
      </section>

      <section className="policy-section">
        <p>
          <strong>Note</strong>: This Privacy Policy is effective as of the date listed above and applies to all versions of the Morning Whisper mobile application.
        </p>
      </section>
    </div>
  )
}

export default PrivacyPolicy

