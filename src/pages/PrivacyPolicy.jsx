import React from 'react'
import { Link } from 'react-router-dom'
import DocLayout from '../components/DocLayout'
import './Page.css'

const SECTIONS = [
  { id: 'overview', title: 'Who we are' },
  { id: 'entertainment', title: 'Entertainment only' },
  { id: 'modes', title: 'Two ways to use the app' },
  { id: 'collect', title: 'Information we collect' },
  { id: 'not-collected', title: 'What we never collect' },
  { id: 'use', title: 'How we use information' },
  { id: 'social', title: 'What other people can see' },
  { id: 'sharing', title: 'Who we share data with' },
  { id: 'ads', title: 'Advertising and consent' },
  { id: 'purchases', title: 'Purchases and coffee points' },
  { id: 'notifications', title: 'Push notifications' },
  { id: 'transfers', title: 'International transfers' },
  { id: 'retention', title: 'How long we keep data' },
  { id: 'security', title: 'Security' },
  { id: 'rights', title: 'Your rights' },
  { id: 'deletion', title: 'Deleting your data' },
  { id: 'children', title: "Children's privacy" },
  { id: 'changes', title: 'Changes to this policy' },
  { id: 'contact', title: 'Contact us' },
]

function PrivacyPolicy() {
  return (
    <DocLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lede="How Turn the Cup handles your information — what stays on your device, what syncs to our servers when you sign in, what your friends can see, and how to get it all deleted."
      updated="19 August 2026"
      sections={SECTIONS}
    >
      <section className="policy-section" id="overview">
        <h2>Who we are</h2>
        <p>
          Turn the Cup (&ldquo;Turn the Cup&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or
          &ldquo;us&rdquo;) is an independently developed mobile app for iOS and Android. You
          finish your coffee, turn the cup, and read the whisper on its base. Around that sit
          collectible cups, coffee points, and an optional friends layer.
        </p>
        <p>
          This Privacy Policy explains what information the app handles, why, and what control you
          have over it. It applies to the Turn the Cup mobile app (bundle identifier
          <strong> com.entertainment.turnthecup</strong>) and to this support website.
        </p>
        <p>
          For the purposes of the EU/UK General Data Protection Regulation, the developer of Turn
          the Cup is the data controller. You can reach us any time at{' '}
          <a href="mailto:ischenko.vadyus@gmail.com">ischenko.vadyus@gmail.com</a>.
        </p>
      </section>

      <section className="policy-section" id="entertainment">
        <h2>Entertainment only</h2>
        <div className="callout callout-hot">
          <span className="callout-icon" aria-hidden="true">☕</span>
          <div>
            <p>
              <strong>Turn the Cup exists for fun.</strong> Whispers — predictions, affirmations,
              advice, quotes, jokes, questions and the rest — are written by us as entertainment.
              They are not fortune telling, not psychic services, and not professional advice of
              any kind.
            </p>
            <p>
              Nothing in the app is based on any scientific, medical, financial, legal or factual
              method, and nothing in it should be used to make an important decision. You are
              responsible for your own choices. See our{' '}
              <Link to="/terms">Terms of Use</Link> for the full disclaimer.
            </p>
          </div>
        </div>
      </section>

      <section className="policy-section" id="modes">
        <h2>Two ways to use the app</h2>
        <p>
          How much data leaves your device depends entirely on whether you sign in. Both modes are
          fully supported — the app works offline and without an account.
        </p>
        <h3>Signed out (local only)</h3>
        <p>
          Everything lives on your device: your setup answers, whisper history, streak, coffee
          points and preferences are held in the app&rsquo;s local storage and never reach our
          servers. Deleting the app deletes this data. The only information that can leave your
          device in this mode is advertising data, and only if you choose to watch a rewarded ad.
        </p>
        <h3>Signed in (cloud sync and friends)</h3>
        <p>
          Signing in with Apple or Google creates an account on our backend, hosted on Supabase.
          Your history, settings, cups, points and social activity are then stored on our servers
          so they survive a reinstall or a new phone, and so friends features can work. The
          sections below describe exactly what that includes.
        </p>
      </section>

      <section className="policy-section" id="collect">
        <h2>Information we collect</h2>

        <h3>1. Account information</h3>
        <p>
          You can sign in with <strong>Sign in with Apple</strong> or <strong>Google</strong>. We
          receive a user identifier and, depending on what you allow, your email address and the
          name on your provider account. We never receive your Apple or Google password.
        </p>
        <ul>
          <li>
            If you use Apple&rsquo;s <em>Hide My Email</em>, we only ever see the relay address
            Apple generates — that is fine, everything works the same way.
          </li>
          <li>
            Authentication is handled by Supabase Auth. Session tokens are stored in your
            device&rsquo;s secure keychain (iOS Keychain / Android Keystore), not in ordinary app
            storage.
          </li>
        </ul>

        <h3>2. Your profile and preferences</h3>
        <ul>
          <li><strong>Display name</strong> — the name you type during setup, visible to friends.</li>
          <li>
            <strong>Avatar</strong> — an ID and colour for one of eight preset drawn faces. There is
            no photo upload in Turn the Cup, so we never receive a picture of you.
          </li>
          <li>
            <strong>Setup answers</strong> — the optional mood, energy, life-focus and current
            situation choices that tune which whispers you are shown, plus your collection
            preferences.
          </li>
          <li><strong>Language</strong> — English, Spanish, French or Ukrainian.</li>
          <li><strong>Notification schedule</strong> — the times you set, if you enable reminders.</li>
          <li><strong>Equipped cup</strong> — which collectible cup you currently use.</li>
        </ul>

        <h3>3. Your activity in the app</h3>
        <ul>
          <li>
            <strong>Whisper history</strong> — which whisper you received, when, in which cup, and
            whether you marked it a favourite.
          </li>
          <li><strong>Streak and engagement</strong> — daily streak count, milestones reached, daily state.</li>
          <li>
            <strong>Coffee points ledger</strong> — every credit and debit: daily bonuses, streak
            milestones, rewarded ads, referrals, purchased packs, and what you spent on cups, sends
            and gifts.
          </li>
          <li><strong>Owned and purchased cups.</strong></li>
          <li>
            <strong>Installations</strong> — a per-device record (a generated installation ID and
            platform) so the same account can sync across your devices.
          </li>
          <li>
            <strong>Usage counters</strong> — app-open times, daily session counts and a capped log
            of in-app events (app opened, whisper generated, streak reached, and similar). These are
            stored in your own account rows on our backend. We do not use Google Analytics,
            Firebase Analytics, Amplitude, Mixpanel, or any other third-party analytics SDK.
          </li>
        </ul>

        <h3>4. Social data (only if you use friends features)</h3>
        <ul>
          <li><strong>Friendships</strong> — who you are connected with.</li>
          <li>
            <strong>Invite codes</strong> — the code you generate, and a record of which account
            redeemed it, so referral rewards can be paid.
          </li>
          <li>
            <strong>Stories / shares</strong> — a whisper you choose to share with friends, its
            text, the cup it appeared in, and the emoji reactions others leave on it.
          </li>
          <li>
            <strong>Sent whispers</strong> — when you send a whisper to a friend you write a short
            message (up to 280 characters). We store that text, the sender, the recipient, the cup,
            and whether it has been read.
          </li>
          <li>
            <strong>Gifts</strong> — the item sent, its price, one of eight preset messages
            (we store the number, not free text), and when it was opened.
          </li>
          <li>
            <strong>Blocks and reports</strong> — if you block or report someone, we store who
            blocked or reported whom and the reason text you provide, so we can review it.
          </li>
        </ul>

        <h3>5. Device and technical data</h3>
        <ul>
          <li>
            <strong>Push token</strong> — an Expo push token plus your platform and language, if you
            allow notifications.
          </li>
          <li>
            <strong>Advertising identifiers</strong> — handled by Google AdMob when you watch a
            rewarded ad. See <a href="#ads">Advertising and consent</a>.
          </li>
          <li>
            <strong>Purchase receipts</strong> — a transaction ID and product ID passed to
            RevenueCat for verification. See <a href="#purchases">Purchases and coffee points</a>.
          </li>
          <li>
            <strong>Server logs</strong> — our hosting provider records standard request metadata
            (IP address, timestamp, endpoint) for security and abuse prevention.
          </li>
        </ul>

        <h3>6. Information you send us directly</h3>
        <p>
          If you use the <Link to="/contact">contact form</Link> on this site or email us, we
          receive your name, email address and whatever you write, and we keep it for as long as
          needed to resolve your request.
        </p>
      </section>

      <section className="policy-section" id="not-collected">
        <h2>What we never collect</h2>
        <p>Turn the Cup does not request, collect or store:</p>
        <ul>
          <li>Your precise or approximate location</li>
          <li>Your contacts, calendar, photos, camera or microphone</li>
          <li>Health, fitness or biometric data</li>
          <li>Payment card numbers or bank details — Apple and Google handle all payments</li>
          <li>Your date of birth, postal address or phone number</li>
          <li>Any uploaded photo or profile picture (avatars are drawn presets only)</li>
        </ul>
      </section>

      <section className="policy-section" id="use">
        <h2>How we use information</h2>
        <p>
          We use your information only for the purposes below. Where the GDPR applies, the legal
          basis for each purpose is listed.
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">Purpose</th>
                <th scope="col">Data used</th>
                <th scope="col">Legal basis (GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Run the app and pick your daily whisper</td>
                <td>Setup answers, preferences, history, streak</td>
                <td>Performance of a contract</td>
              </tr>
              <tr>
                <td>Sync your data across devices</td>
                <td>Account ID, profile, history, settings, installations</td>
                <td>Performance of a contract</td>
              </tr>
              <tr>
                <td>Friends, stories, sends and gifts</td>
                <td>Social data listed above</td>
                <td>Performance of a contract (you choose to use it)</td>
              </tr>
              <tr>
                <td>Coffee points, purchases and fraud prevention</td>
                <td>Points ledger, transaction and product IDs</td>
                <td>Contract; legitimate interest in preventing abuse</td>
              </tr>
              <tr>
                <td>Send push notifications</td>
                <td>Push token, platform, locale</td>
                <td>Consent (device permission)</td>
              </tr>
              <tr>
                <td>Show rewarded ads</td>
                <td>Advertising identifiers, ad interaction</td>
                <td>Consent in the EEA/UK/Switzerland; legitimate interest elsewhere</td>
              </tr>
              <tr>
                <td>Keep the service safe — blocks, reports, moderation</td>
                <td>Reports, blocks, related account IDs</td>
                <td>Legitimate interest; legal obligation</td>
              </tr>
              <tr>
                <td>Improve the app</td>
                <td>Aggregate usage counters</td>
                <td>Legitimate interest</td>
              </tr>
              <tr>
                <td>Answer your support messages</td>
                <td>What you send us</td>
                <td>Legitimate interest</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We do not sell your personal information, and we do not use your data to build
          advertising profiles ourselves.
        </p>
      </section>

      <section className="policy-section" id="social">
        <h2>What other people can see</h2>
        <p>
          Turn the Cup has no public profiles and no discovery. Nobody can find you by name, email
          or phone number — connections are made only by sharing an invite code. Once you are
          friends, that person can see:
        </p>
        <ul>
          <li>Your display name and preset avatar</li>
          <li>Whispers you deliberately share as a story, and the cup art around them</li>
          <li>Whispers you send them, including the message you write</li>
          <li>Gifts you send them</li>
          <li>Your shelf of gifts, where the app shows it</li>
        </ul>
        <p>
          Friends never see your history, your favourites, your streak, your points balance, your
          setup answers or your email address. Push notifications about a send name the sender but
          never carry the message text; gift notifications name the sender but never the item.
        </p>
        <p>
          You can block someone at any time from their profile, which stops all interaction between
          you, and you can report content or behaviour for review. See the{' '}
          <Link to="/terms">Terms of Use</Link> for our content rules.
        </p>
      </section>

      <section className="policy-section" id="sharing">
        <h2>Who we share data with</h2>
        <p>
          We do not sell, rent or trade your personal information. We use a small number of service
          providers to run the app, each processing only what their function requires:
        </p>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">Provider</th>
                <th scope="col">What it does</th>
                <th scope="col">Privacy policy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Supabase</td>
                <td>Database, authentication, storage and server functions</td>
                <td><a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">supabase.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple</td>
                <td>Sign in with Apple, App Store distribution, in-app purchases, push delivery</td>
                <td><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">apple.com/legal/privacy</a></td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Google Sign-In, Google Play distribution and billing, push delivery</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>Google AdMob</td>
                <td>Rewarded video ads and consent management</td>
                <td><a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">policies.google.com/technologies/ads</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>Verifying in-app purchase receipts</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Expo</td>
                <td>Push notification delivery and app builds</td>
                <td><a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer">expo.dev/privacy</a></td>
              </tr>
              <tr>
                <td>Resend</td>
                <td>Delivering messages sent through the contact form on this site</td>
                <td><a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">resend.com/legal/privacy-policy</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We may also disclose information if we are legally required to, or where it is necessary
          to investigate abuse, enforce our <Link to="/terms">Terms of Use</Link>, or protect the
          rights and safety of our users. If the app is ever transferred to another owner, your data
          may move with it, and we will say so here before that takes effect.
        </p>
      </section>

      <section className="policy-section" id="ads">
        <h2>Advertising and consent</h2>
        <p>
          Turn the Cup shows <strong>rewarded video ads only</strong>, supplied by Google AdMob.
          There are no banners, no interstitials and no ads that appear on their own. An ad plays
          only when you tap to watch one in exchange for coffee points, up to five per day.
        </p>

        <h3>What AdMob receives</h3>
        <ul>
          <li>Your device advertising identifier (IDFA on iOS, Advertising ID on Android)</li>
          <li>IP address, and device information such as model and OS version</li>
          <li>Ad interaction data — that an ad was requested, shown and completed</li>
        </ul>
        <p>
          Google&rsquo;s use of this information is governed by the{' '}
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
            Google Advertising Privacy Policy
          </a>
          . To make sure a reward is genuine, we also pass AdMob a one-time random number, which
          Google returns to our server in a signed verification callback. It contains no personal
          information about you.
        </p>

        <h3>Consent in the EEA, UK and Switzerland (GDPR)</h3>
        <p>
          Before any ad is requested, the app presents Google&rsquo;s certified consent form
          (the User Messaging Platform, or UMP) as required by the GDPR and Google&rsquo;s EU user
          consent policy. Your choice is recorded on your device.
        </p>
        <ul>
          <li>If you consent, you may be shown personalised ads.</li>
          <li>
            If you refuse, or if no consent has been recorded, the app requests
            <strong> non-personalised ads only</strong>.
          </li>
          <li>
            If you do not allow ads at all, the rewarded-ad feature simply does not run. Nothing
            else in Turn the Cup is affected — ads are never required to use the app.
          </li>
        </ul>
        <p>
          You can withdraw your consent at any time by resetting your advertising identifier in your
          device settings, or by emailing us at{' '}
          <a href="mailto:ischenko.vadyus@gmail.com">ischenko.vadyus@gmail.com</a> and we will
          action it.
        </p>

        <h3>App Tracking Transparency (iOS)</h3>
        <p>
          On iOS, the system asks for your permission before any tracking identifier can be used
          for advertising. If you decline, ads are non-personalised. You can change this any time in{' '}
          <strong>Settings → Privacy &amp; Security → Tracking</strong>.
        </p>

        <h3>Device-level opt-outs</h3>
        <ul>
          <li><strong>iOS:</strong> Settings → Privacy &amp; Security → Apple Advertising → Personalised Ads</li>
          <li><strong>Android:</strong> Settings → Google → Ads → Delete advertising ID, or opt out of ads personalisation</li>
        </ul>
        <p>You will still see rewarded ads if you choose to watch them; they will just be less relevant.</p>
      </section>

      <section className="policy-section" id="purchases">
        <h2>Purchases and coffee points</h2>
        <p>
          Coffee points are an in-app virtual currency. You earn them by using the app — a daily
          bonus, streak milestones, referrals and rewarded ads — and you can also buy point packs.
        </p>
        <p>
          <strong>All payments are processed by Apple or Google.</strong> We never see or store your
          card number, billing address or any payment credential. When a purchase completes, the
          store gives the app a transaction ID and product ID, which we pass to RevenueCat and our
          server to verify the receipt is genuine and to credit the right number of points. Your
          points balance and its full history live in your account on our backend.
        </p>
        <p>
          Coffee points have no monetary value, cannot be exchanged for money, and cannot be
          transferred outside the app. Refunds are handled by Apple or Google under their own
          policies — see the <Link to="/terms">Terms of Use</Link>.
        </p>
      </section>

      <section className="policy-section" id="notifications">
        <h2>Push notifications</h2>
        <p>
          Notifications are optional and off until you allow them. If you do, we store an Expo push
          token for your device along with your platform and language so messages arrive in the
          right language. Delivery runs through the Expo push service to Apple&rsquo;s and
          Google&rsquo;s notification networks.
        </p>
        <p>We use notifications for your own reminders, and to tell you when a friend sends you a whisper or a gift. We never use them for advertising.</p>
        <p>
          You can turn them off at any time in the app&rsquo;s settings or in your device settings.
          Turning them off in your device settings stops delivery immediately; we remove the stored
          token when you sign out or delete your account.
        </p>
      </section>

      <section className="policy-section" id="transfers">
        <h2>International transfers</h2>
        <p>
          Turn the Cup is available worldwide, and our service providers operate globally. Your data
          may therefore be processed in countries outside your own, including the United States.
        </p>
        <p>
          Where data is transferred out of the EEA, the UK or Switzerland, our providers rely on the
          European Commission&rsquo;s Standard Contractual Clauses, the UK International Data
          Transfer Addendum, or an adequacy decision, as set out in their own privacy documentation
          linked in <a href="#sharing">Who we share data with</a>.
        </p>
      </section>

      <section className="policy-section" id="retention">
        <h2>How long we keep data</h2>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">Data</th>
                <th scope="col">Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Local device data (signed out)</td>
                <td>Until you clear the app&rsquo;s data or uninstall it</td>
              </tr>
              <tr>
                <td>Account, profile, history, points and cups</td>
                <td>Until you delete your account</td>
              </tr>
              <tr>
                <td>Stories and shares</td>
                <td>Until you remove them or delete your account</td>
              </tr>
              <tr>
                <td>Sent whispers and gifts</td>
                <td>Kept for both sender and recipient until either deletes their account</td>
              </tr>
              <tr>
                <td>Usage counters</td>
                <td>Capped at the most recent 1,000 events per account</td>
              </tr>
              <tr>
                <td>Push tokens</td>
                <td>Removed when you sign out, disable notifications, or delete your account</td>
              </tr>
              <tr>
                <td>Reports and blocks</td>
                <td>Up to 12 months after review, for safety and repeat-abuse detection</td>
              </tr>
              <tr>
                <td>Purchase records</td>
                <td>As long as required for tax, accounting and dispute handling</td>
              </tr>
              <tr>
                <td>Support emails</td>
                <td>Up to 24 months after your request is resolved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="policy-section" id="security">
        <h2>Security</h2>
        <ul>
          <li>All traffic between the app and our servers uses TLS encryption.</li>
          <li>
            Every table on our backend is protected by row-level security policies, so an account
            can only ever read and write its own rows. Points, prices and purchases are decided by
            the server, never trusted from the client.
          </li>
          <li>Authentication sessions are stored in the device keychain, not in ordinary app storage.</li>
          <li>Payment credentials never reach us — Apple and Google hold them.</li>
        </ul>
        <p>
          No system is perfectly secure, and we cannot guarantee absolute security. If we ever
          become aware of a breach affecting your personal data, we will notify you and the relevant
          supervisory authority as the law requires.
        </p>
      </section>

      <section className="policy-section" id="rights">
        <h2>Your rights</h2>
        <h3>If you are in the EEA, UK or Switzerland (GDPR)</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you, and receive a copy</li>
          <li>Have inaccurate data corrected</li>
          <li>Have your data erased</li>
          <li>Restrict or object to certain processing, including processing based on legitimate interests</li>
          <li>Receive your data in a portable, machine-readable format</li>
          <li>Withdraw consent at any time, without affecting processing that already happened</li>
          <li>Lodge a complaint with your local data protection authority</li>
        </ul>

        <h3>If you are in California (CCPA/CPRA)</h3>
        <p>You have the right to know what we collect, to have it deleted, to have it corrected, and to not be discriminated against for exercising those rights.</p>
        <p>
          <strong>We do not sell personal information</strong> and we do not share it for
          cross-context behavioural advertising, other than through the AdMob consent choice
          described in <a href="#ads">Advertising and consent</a>, which you control. Refusing
          consent or disabling your advertising identifier is your opt-out.
        </p>

        <h3>How to exercise them</h3>
        <p>
          Most of it is one tap away — see <a href="#deletion">Deleting your data</a>. For anything
          else, email <a href="mailto:ischenko.vadyus@gmail.com">ischenko.vadyus@gmail.com</a> from
          the address on your account, or use the <Link to="/contact">contact form</Link>. We reply
          within 30 days, and we do not charge for it.
        </p>
      </section>

      <section className="policy-section" id="deletion">
        <h2>Deleting your data</h2>
        <h3>From inside the app</h3>
        <p>
          Open <strong>Settings → Delete account</strong> and confirm. This immediately removes your
          profile, whisper history, streak and engagement data, settings, usage counters, device
          installations and push tokens from our servers, wipes everything held locally on the
          device, and signs you out.
        </p>
        <h3>Completing the erasure</h3>
        <p>
          Your underlying authentication record and your social records — friendships, invite
          redemptions, stories, sent whispers and gifts — are removed by us as part of a full
          account erasure. Email{' '}
          <a href="mailto:ischenko.vadyus@gmail.com">ischenko.vadyus@gmail.com</a> from the address
          on your account and we will complete it within 30 days and confirm when it is done.
        </p>
        <h3>Without an account</h3>
        <p>
          If you never signed in, uninstalling the app removes everything, because nothing was ever
          stored anywhere else.
        </p>
        <h3>What may remain</h3>
        <p>
          We keep the minimum needed for legal reasons: purchase records required for tax and
          accounting, and reports filed about serious abuse. Content you sent to another person —
          a whisper or a gift they received — stays in their copy, as it does with any messaging
          app.
        </p>
      </section>

      <section className="policy-section" id="children">
        <h2>Children&rsquo;s privacy</h2>
        <p>
          Turn the Cup is not directed at children. You must be at least 13 years old to use it, and
          at least 16 in countries where 16 is the minimum age for consent to data processing,
          unless a parent or guardian consents on your behalf.
        </p>
        <p>
          We do not knowingly collect personal information from children below those ages. If you
          believe a child has provided us with personal information, email us and we will delete the
          account and its data promptly.
        </p>
      </section>

      <section className="policy-section" id="changes">
        <h2>Changes to this policy</h2>
        <p>
          We update this policy when the app changes. The &ldquo;last updated&rdquo; date at the top
          always reflects the current version. For material changes we will give notice in the app
          before they take effect. Continuing to use Turn the Cup after a change means you accept
          the updated policy.
        </p>
      </section>

      <section className="policy-section" id="contact">
        <h2>Contact us</h2>
        <p>Questions about this policy, a data request, or anything else:</p>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:ischenko.vadyus@gmail.com">ischenko.vadyus@gmail.com</a>
          </li>
          <li>
            <strong>Support form:</strong> <Link to="/contact">Contact Support</Link>
          </li>
        </ul>
        <p>We usually reply within 24–48 hours, and always within 30 days for privacy requests.</p>
      </section>
    </DocLayout>
  )
}

export default PrivacyPolicy
