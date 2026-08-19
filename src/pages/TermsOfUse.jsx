import React from 'react'
import { Link } from 'react-router-dom'
import DocLayout from '../components/DocLayout'
import './Page.css'

const SECTIONS = [
  { id: 'agreement', title: 'Agreement to these terms' },
  { id: 'entertainment', title: 'Entertainment only' },
  { id: 'eligibility', title: 'Who can use Turn the Cup' },
  { id: 'accounts', title: 'Your account' },
  { id: 'licence', title: 'Your licence to use the app' },
  { id: 'points', title: 'Coffee points and virtual items' },
  { id: 'purchases', title: 'Purchases, billing and refunds' },
  { id: 'ads', title: 'Rewarded ads' },
  { id: 'community', title: 'Friends and community rules' },
  { id: 'your-content', title: 'Your content' },
  { id: 'our-content', title: 'Our content' },
  { id: 'prohibited', title: 'Things you must not do' },
  { id: 'availability', title: 'Changes to the app' },
  { id: 'termination', title: 'Suspension and termination' },
  { id: 'disclaimers', title: 'Disclaimers' },
  { id: 'liability', title: 'Limitation of liability' },
  { id: 'indemnity', title: 'Indemnity' },
  { id: 'stores', title: 'Apple and Google' },
  { id: 'law', title: 'Governing law' },
  { id: 'changes', title: 'Changes to these terms' },
  { id: 'contact', title: 'Contact' },
]

function TermsOfUse() {
  return (
    <DocLayout
      eyebrow="Legal"
      title="Terms of Use"
      lede="The agreement between you and Turn the Cup: what the app is, what coffee points are, how the friends layer works, and the rules everyone follows."
      updated="19 August 2026"
      sections={SECTIONS}
    >
      <section className="policy-section" id="agreement">
        <h2>Agreement to these terms</h2>
        <p>
          These Terms of Use (the &ldquo;Terms&rdquo;) are a binding agreement between you and Turn
          the Cup (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;), covering the Turn the Cup
          mobile app for iOS and Android (bundle identifier
          <strong> com.entertainment.turnthecup</strong>) and this support website (together, the
          &ldquo;App&rdquo;).
        </p>
        <p>
          By downloading, installing or using the App, you accept these Terms and our{' '}
          <Link to="/privacy">Privacy Policy</Link>. If you do not accept them, do not use the App.
        </p>
        <p>
          These Terms also serve as the end user licence agreement required by the app stores. If
          Apple or Google requires a different minimum term than the one written here, that minimum
          term applies.
        </p>
      </section>

      <section className="policy-section" id="entertainment">
        <h2>Entertainment only</h2>
        <div className="callout callout-hot">
          <span className="callout-icon" aria-hidden="true">☕</span>
          <div>
            <p>
              <strong>Turn the Cup is an entertainment app.</strong> Every whisper — prediction,
              affirmation, advice, challenge, quote, question, joke, dream, or legendary — is
              written by us for amusement. It is not fortune telling, divination, or a psychic
              service, and it is not professional advice of any kind.
            </p>
            <p>
              Nothing in the App is medical, psychological, legal, financial or safety advice, and
              nothing in it is based on any scientific or factual method. Do not use it to make
              decisions that matter. If you need real advice, speak to a qualified professional.
            </p>
            <p>
              You are solely responsible for your own actions, choices and their consequences. To
              the fullest extent the law allows, we accept no liability for anything you do or do
              not do because of something the App showed you.
            </p>
          </div>
        </div>
      </section>

      <section className="policy-section" id="eligibility">
        <h2>Who can use Turn the Cup</h2>
        <ul>
          <li>You must be at least <strong>13 years old</strong>.</li>
          <li>
            In countries where the minimum age for consent to data processing is higher — 16 across
            much of the EEA — you must have reached that age, or have your parent or guardian&rsquo;s
            consent.
          </li>
          <li>
            You must be legally able to enter into this agreement, and not barred from using the App
            under the laws of your country.
          </li>
          <li>
            If you are a minor, your parent or guardian must review these Terms with you and is
            responsible for your use of the App, including any purchases.
          </li>
        </ul>
      </section>

      <section className="policy-section" id="accounts">
        <h2>Your account</h2>
        <p>
          You can use most of Turn the Cup without an account — the app works offline, and your data
          stays on your device. An account is required for cloud sync, friends, gifts and buying
          point packs.
        </p>
        <ul>
          <li>
            Accounts are created by signing in with Apple or Google. You are responsible for keeping
            access to that provider account secure.
          </li>
          <li>
            You are responsible for everything that happens under your account. Tell us promptly if
            you believe it has been used without your permission.
          </li>
          <li>
            Give accurate information. Do not impersonate anyone, and do not choose a display name
            that is misleading, offensive, or that belongs to someone else.
          </li>
          <li>One account per person. Do not create accounts to farm rewards, referrals or points.</li>
          <li>
            You can delete your account at any time from <strong>Settings → Delete account</strong>.
            See the <Link to="/privacy">Privacy Policy</Link> for what that removes.
          </li>
        </ul>
      </section>

      <section className="policy-section" id="licence">
        <h2>Your licence to use the app</h2>
        <p>
          We grant you a personal, limited, non-exclusive, non-transferable, revocable licence to
          install and use the App on devices you own or control, for your own non-commercial
          entertainment, in line with these Terms and the rules of the store you downloaded it from.
        </p>
        <p>
          We keep all rights not expressly granted. You may not sell, rent, sublicense or
          redistribute the App, and you may not copy, modify, translate, reverse engineer,
          decompile or disassemble it, or attempt to derive its source code, except where the law
          expressly permits it despite this restriction.
        </p>
      </section>

      <section className="policy-section" id="points">
        <h2>Coffee points and virtual items</h2>
        <p>
          Coffee points are an in-app virtual currency. Cups, gifts and sent whispers are virtual
          items. Both exist only inside Turn the Cup.
        </p>

        <h3>How you get points</h3>
        <ul>
          <li>A bonus for your first turn of the day</li>
          <li>Streak milestones at 3, 7, 14 and 30 days, each paid once</li>
          <li>Referral rewards when someone who used your invite code keeps using the app</li>
          <li>Watching a rewarded ad, up to five per day</li>
          <li>Buying a point pack through the App Store or Google Play</li>
        </ul>

        <h3>What points are — and are not</h3>
        <div className="callout">
          <span className="callout-icon" aria-hidden="true">⚠️</span>
          <div>
            <p>
              <strong>Coffee points have no monetary value.</strong> They are a limited, revocable
              licence to use a feature of the App — not your property, not a bank balance, not a
              security, and not any kind of currency outside the App.
            </p>
          </div>
        </div>
        <ul>
          <li>Points and virtual items cannot be exchanged for money or anything of real-world value.</li>
          <li>
            They cannot be sold, traded, gifted outside the App, transferred to another account, or
            inherited. Selling or buying accounts or points elsewhere is prohibited and voids them.
          </li>
          <li>
            Balances, prices and rewards are decided by our servers. If a bug, exploit or failed
            payment gives you points or items you were not entitled to, we may remove them and
            correct the balance.
          </li>
          <li>
            We may change prices, reward amounts, daily limits and the catalogue of cups and gifts
            at any time. Items you already own stay owned.
          </li>
          <li>
            Unused points are lost if your account is deleted or terminated, and are not refunded.
          </li>
          <li>
            If we discontinue Turn the Cup, points and virtual items end with it. We will give
            reasonable notice where we can, and will not sell new point packs once we have announced
            a shutdown.
          </li>
        </ul>
      </section>

      <section className="policy-section" id="purchases">
        <h2>Purchases, billing and refunds</h2>
        <p>
          Point packs are one-off, consumable in-app purchases. All payments are handled by
          <strong> Apple</strong> or <strong>Google</strong> — never by us. We never see your card
          details.
        </p>
        <ul>
          <li>
            The price shown at checkout is the price you pay, in your store&rsquo;s currency,
            including any tax the store collects. Your store charges the payment method on your
            store account.
          </li>
          <li>
            Points are credited once the store confirms the purchase and our server verifies the
            receipt. If verification is delayed, the points arrive when it completes; if a charge is
            reversed, the corresponding points are removed.
          </li>
          <li>
            Purchases are consumed on delivery. Beyond the mandatory rights below, all sales are
            final and points are non-refundable.
          </li>
          <li>
            <strong>Refunds are requested from the store</strong>, not from us —{' '}
            <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
              reportaproblem.apple.com
            </a>{' '}
            for the App Store, or Google Play&rsquo;s order history for Android. We cannot issue,
            reverse or override a store&rsquo;s refund decision.
          </li>
          <li>
            If you are a consumer in the EEA or UK, you have a statutory 14-day right of withdrawal
            for digital content. By buying a point pack and receiving the points immediately, you
            ask for delivery to begin at once and acknowledge that you lose that right on delivery.
            Nothing here limits any other mandatory consumer right you have.
          </li>
          <li>
            Keep your device secure and use your store&rsquo;s purchase controls. You are responsible
            for purchases made from your device, including by anyone you let use it.
          </li>
        </ul>
      </section>

      <section className="policy-section" id="ads">
        <h2>Rewarded ads</h2>
        <p>
          Turn the Cup shows rewarded video ads supplied by Google AdMob, and only when you choose
          to watch one for points. There are no banners, no interstitials and no ads that interrupt
          you. Ads are optional — the App works fully without ever watching one.
        </p>
        <ul>
          <li>Rewards are granted only after Google verifies the ad was genuinely watched.</li>
          <li>
            Interfering with ad delivery or verification — emulators, automation, click fraud,
            tampering with the reward callback — is a breach of these Terms and forfeits the points.
          </li>
          <li>
            Ad content comes from advertisers, not from us. We do not endorse it and are not
            responsible for it. Report anything inappropriate to us and to Google.
          </li>
          <li>
            Advertising consent and personalisation are covered in the{' '}
            <Link to="/privacy">Privacy Policy</Link>.
          </li>
        </ul>
      </section>

      <section className="policy-section" id="community">
        <h2>Friends and community rules</h2>
        <p>
          Turn the Cup&rsquo;s social layer lets you connect with friends by invite code, share a
          whisper as a story, send a friend a whisper with a short message, and send gifts. There are
          no public profiles and no way to find a stranger.
        </p>

        <div className="callout callout-hot">
          <span className="callout-icon" aria-hidden="true">🚫</span>
          <div>
            <p>
              <strong>We have zero tolerance for objectionable content or abusive behaviour.</strong>{' '}
              Anyone who posts it or engages in it can be removed from Turn the Cup without warning.
            </p>
          </div>
        </div>

        <h3>What is not allowed</h3>
        <p>In anything you write, send or share — including your display name — you must not:</p>
        <ul>
          <li>Harass, bully, threaten, stalk or intimidate anyone</li>
          <li>Post hate speech, or attack people over race, ethnicity, national origin, religion, disability, sex, gender identity, sexual orientation or age</li>
          <li>Send sexually explicit or pornographic material, or anything sexualising a minor</li>
          <li>Post violent, gory or shocking content, or content that glorifies self-harm, suicide or eating disorders</li>
          <li>Promote illegal activity, drugs, weapons, gambling, scams, pyramid schemes or fraud</li>
          <li>Impersonate another person, or misrepresent who you are</li>
          <li>Share someone else&rsquo;s private information without permission</li>
          <li>Send spam, chain messages, advertising or unsolicited promotion</li>
          <li>Post anything that infringes someone&rsquo;s copyright, trademark or other rights</li>
          <li>Post malware, phishing links or anything designed to harm a device or account</li>
        </ul>

        <h3>Reporting and blocking</h3>
        <p>Every user has both tools, always available:</p>
        <ul>
          <li>
            <strong>Block</strong> — open the person&rsquo;s profile and block them. All interaction
            between you stops immediately, in both directions.
          </li>
          <li>
            <strong>Report</strong> — report a person or something they sent, with a reason. Reports
            reach us directly for human review.
          </li>
          <li>
            You can also email{' '}
            <a href="mailto:ischenko.vadyus@gmail.com">ischenko.vadyus@gmail.com</a> or use the{' '}
            <Link to="/contact">contact form</Link>.
          </li>
        </ul>

        <h3>How we act on reports</h3>
        <p>
          We review every report and <strong>act within 24 hours</strong> of receiving it. Depending
          on what we find, we remove the content, warn the account, restrict its social features, or
          terminate it and block the user from the service. Decisions about serious abuse are final.
        </p>
        <p>
          By using the social features you agree that there is no tolerance for objectionable content
          or abusive users, and that we may remove content and terminate accounts to enforce that.
        </p>
      </section>

      <section className="policy-section" id="your-content">
        <h2>Your content</h2>
        <p>
          &ldquo;Your content&rdquo; means what you create in the App: your display name, the
          messages you write when sending a whisper, the whispers you choose to share as stories,
          your reactions, and any report text.
        </p>
        <ul>
          <li>
            You keep ownership of your content, and you are responsible for it. Do not post content
            you do not have the right to post.
          </li>
          <li>
            You grant us a worldwide, non-exclusive, royalty-free licence to host, store, reproduce,
            transmit and display your content for the sole purpose of operating the App — for
            example, delivering the whisper you sent to the friend you sent it to. This licence
            ends when the content is deleted, except for copies already delivered to another user
            and backups that expire on their normal cycle.
          </li>
          <li>
            We do not pre-screen content, but we may review, remove or refuse any content that
            breaches these Terms.
          </li>
          <li>
            Content you send to another person stays in their copy after you delete yours, as it
            does with any messaging app.
          </li>
        </ul>
      </section>

      <section className="policy-section" id="our-content">
        <h2>Our content</h2>
        <p>
          The App, the Turn the Cup name and logo, the whisper catalogue, the cup and gift artwork,
          the interface, the animations and the underlying software are owned by us or our licensors
          and protected by copyright, trademark and other laws.
        </p>
        <ul>
          <li>
            Whispers are for your personal enjoyment. Share a screenshot with friends or on social
            media freely, but do not republish the catalogue in bulk, or use it to build a competing
            product or dataset.
          </li>
          <li>Do not scrape, mine, or use automated tools to extract content from the App or its servers.</li>
          <li>Do not use our name, logo or artwork in a way that suggests we endorse you.</li>
        </ul>
      </section>

      <section className="policy-section" id="prohibited">
        <h2>Things you must not do</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Break any law, or infringe anyone&rsquo;s rights, using the App</li>
          <li>Access another user&rsquo;s account, or try to</li>
          <li>Probe, scan, overload or disrupt the App, our servers, or the networks behind them</li>
          <li>Bypass, disable or interfere with security features, rate limits or row-level access rules</li>
          <li>Modify the App, run it on a jailbroken or rooted device to gain an advantage, or use unofficial clients, bots, emulators or automation</li>
          <li>Exploit bugs to obtain points, cups, gifts or rewards — report them to us instead</li>
          <li>Create multiple or automated accounts, or abuse the referral and invite system</li>
          <li>Use the App commercially, or resell access to it</li>
        </ul>
      </section>

      <section className="policy-section" id="availability">
        <h2>Changes to the app</h2>
        <p>
          Turn the Cup is under active development. We may add, change, suspend or remove features,
          adjust the whisper catalogue, retune the points economy, or change how anything works,
          at any time.
        </p>
        <p>
          We may also stop offering the App entirely. If we do, we will give reasonable notice where
          we can, and stop selling point packs once a shutdown is announced. The App is provided as
          it is — we do not promise uninterrupted or error-free availability, and features that
          depend on the network, the stores, or ad providers may be unavailable at times.
        </p>
      </section>

      <section className="policy-section" id="termination">
        <h2>Suspension and termination</h2>
        <p>
          You can stop at any time by deleting your account in the App and uninstalling it.
        </p>
        <p>
          We may suspend or terminate your access, with notice where practical and immediately where
          the breach is serious, if you break these Terms, abuse other users, exploit the App, or
          use it in a way that creates legal risk for us or others.
        </p>
        <p>
          On termination, your licence to use the App ends and any remaining coffee points and
          virtual items are forfeited without refund. Sections that by their nature should survive —
          content licences, disclaimers, limitation of liability, indemnity and governing law —
          continue to apply.
        </p>
      </section>

      <section className="policy-section" id="disclaimers">
        <h2>Disclaimers</h2>
        <p>
          The App is provided <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong>,
          without warranties of any kind, whether express, implied or statutory, including implied
          warranties of merchantability, fitness for a particular purpose, title and
          non-infringement, to the fullest extent permitted by law.
        </p>
        <p>We do not warrant that:</p>
        <ul>
          <li>The App will be uninterrupted, timely, secure or error-free</li>
          <li>Any content in the App is accurate, reliable or fit for any purpose — it is entertainment</li>
          <li>Defects will be corrected, or that data will never be lost</li>
          <li>Content sent by other users is lawful, accurate or inoffensive</li>
        </ul>
        <p>
          Some jurisdictions do not allow the exclusion of implied warranties, so parts of this
          section may not apply to you. Nothing here affects your mandatory rights as a consumer.
        </p>
      </section>

      <section className="policy-section" id="liability">
        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Turn the Cup and anyone working with us will not be
          liable for any indirect, incidental, special, consequential, exemplary or punitive damages,
          or for lost profits, lost data, lost goodwill, or lost coffee points or virtual items,
          arising from or connected with your use of the App — including anything you did or did not
          do in reliance on a whisper.
        </p>
        <p>
          Our total liability for all claims relating to the App is limited to the greater of the
          amount you paid us through in-app purchases in the twelve months before the claim, or
          US $50.
        </p>
        <p>
          Nothing in these Terms excludes or limits liability for death or personal injury caused by
          negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot be
          limited by law. If you are a consumer, your mandatory statutory rights are unaffected.
        </p>
      </section>

      <section className="policy-section" id="indemnity">
        <h2>Indemnity</h2>
        <p>
          You agree to indemnify and hold us harmless from any claim, demand, loss or expense —
          including reasonable legal fees — arising from your content, your use of the App, your
          breach of these Terms, or your violation of any law or of anyone else&rsquo;s rights.
        </p>
      </section>

      <section className="policy-section" id="stores">
        <h2>Apple and Google</h2>
        <p>
          These Terms are between you and us only. Apple and Google are not parties to them and are
          not responsible for the App.
        </p>
        <h3>App Store (Apple)</h3>
        <ul>
          <li>
            Apple has no obligation to provide maintenance or support for the App, and no
            responsibility for addressing any claim about it — including product liability, a failure
            to conform to legal requirements, or a claim under consumer protection or privacy law.
          </li>
          <li>
            If the App fails to conform to any applicable warranty, you may notify Apple and Apple
            will refund the purchase price, if any. To the maximum extent permitted by law, Apple has
            no other warranty obligation whatsoever.
          </li>
          <li>
            Apple is responsible for handling claims that the App or your use of it infringes a third
            party&rsquo;s intellectual property rights only to the extent required by the App Store
            terms; otherwise we are.
          </li>
          <li>
            You confirm you are not located in a country subject to a US Government embargo or
            designated as a &ldquo;terrorist supporting&rdquo; country, and are not on any US
            Government list of prohibited or restricted parties.
          </li>
          <li>
            <strong>
              Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce
              them against you.
            </strong>
          </li>
        </ul>
        <h3>Google Play</h3>
        <p>
          Use of the App from Google Play is also subject to the Google Play Terms of Service. Google
          is not responsible for the App, provides no support for it, and any claim about the App is
          between you and us.
        </p>
      </section>

      <section className="policy-section" id="law">
        <h2>Governing law</h2>
        <p>
          These Terms are governed by the laws of Ukraine, where the developer is based, without
          regard to conflict-of-law rules. Disputes that cannot be resolved informally will be
          brought before the competent courts of Ukraine.
        </p>
        <p>
          <strong>If you are a consumer, this does not take anything away from you.</strong> You keep
          the protection of the mandatory consumer laws of the country where you live, and you may
          bring proceedings in your local courts where the law gives you that right. Consumers in the
          EU can also use the European Commission&rsquo;s{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            Online Dispute Resolution platform
          </a>
          .
        </p>
        <p>
          Please email us first — almost everything is settled faster that way than through a court.
        </p>
      </section>

      <section className="policy-section" id="changes">
        <h2>Changes to these terms</h2>
        <p>
          We may update these Terms as the App changes. The &ldquo;last updated&rdquo; date at the
          top always reflects the current version. For material changes we will give notice in the
          App before they take effect, and where required we will ask you to accept them.
        </p>
        <p>
          Continuing to use Turn the Cup after a change takes effect means you accept the updated
          Terms. If you do not accept them, delete your account and stop using the App.
        </p>
      </section>

      <section className="policy-section" id="contact">
        <h2>Contact</h2>
        <p>Questions about these Terms, or a report you need us to look at:</p>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:ischenko.vadyus@gmail.com">ischenko.vadyus@gmail.com</a>
          </li>
          <li>
            <strong>Support form:</strong> <Link to="/contact">Contact Support</Link>
          </li>
        </ul>
        <p>
          If any part of these Terms is found unenforceable, the rest stays in force. Our not
          enforcing something straight away does not waive our right to enforce it later.
        </p>
      </section>
    </DocLayout>
  )
}

export default TermsOfUse
