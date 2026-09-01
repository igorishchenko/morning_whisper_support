/**
 * Terms of Use — English (source of truth).
 *
 * Structured content, not JSX: the same shape is rendered for all four locales
 * by components/LegalDoc.jsx. Inline markup is **bold** and [label](href);
 * hrefs starting with '/' become router links.
 */
export const termsEn = {
  eyebrow: 'Legal',
  title: 'Terms of Use',
  lede:
    'The agreement between you and Turn the Cup: what the app is, what coffee points are, how the friends layer works, and the rules everyone follows.',
  updatedLabel: 'Last updated:',
  updated: '1 September 2026',
  tocTitle: 'On this page',
  meta: {
    title: 'Terms of Use — Turn the Cup',
    description:
      'The terms you agree to when using Turn the Cup: eligibility, your account, coffee points and virtual items, community rules, disclaimers and governing law.',
  },
  sections: [
  {
    "id": "agreement",
    "title": "Agreement to these terms",
    "blocks": [
      {
        "p": "These Terms of Use (the “Terms”) are a binding agreement between you and Turn the Cup (“we”, “our”, “us”), covering the Turn the Cup app for iPhone and iPad (bundle identifier ** com.entertainment.turnthecup**) and this support website (together, the “App”)."
      },
      {
        "p": "By downloading, installing or using the App, you accept these Terms and our [Privacy Policy](/privacy). If you do not accept them, do not use the App."
      },
      {
        "p": "These Terms also serve as the end user licence agreement required by the App Store. If Apple requires a different minimum term than the one written here, that minimum term applies."
      }
    ]
  },
  {
    "id": "entertainment",
    "title": "Entertainment only",
    "blocks": [
      {
        "callout": [
          {
            "p": "**Turn the Cup is an entertainment app.** Every reading — prediction, affirmation, advice, challenge, quote, question, joke, dream, or legendary — is written by us for amusement. It is not fortune telling, divination, or a psychic service, and it is not professional advice of any kind."
          },
          {
            "p": "Nothing in the App is medical, psychological, legal, financial or safety advice, and nothing in it is based on any scientific or factual method. Do not use it to make decisions that matter. If you need real advice, speak to a qualified professional."
          },
          {
            "p": "You are solely responsible for your own actions, choices and their consequences. To the fullest extent the law allows, we accept no liability for anything you do or do not do because of something the App showed you."
          }
        ],
        "icon": "☕",
        "tone": "hot"
      }
    ]
  },
  {
    "id": "eligibility",
    "title": "Who can use Turn the Cup",
    "blocks": [
      {
        "ul": [
          "You must be at least **13 years old**.",
          "In countries where the minimum age for consent to data processing is higher — 16 across much of the EEA — you must have reached that age, or have your parent or guardian’s consent.",
          "You must be legally able to enter into this agreement, and not barred from using the App under the laws of your country.",
          "If you are a minor, your parent or guardian must review these Terms with you and is responsible for your use of the App, including any purchases."
        ]
      }
    ]
  },
  {
    "id": "accounts",
    "title": "Your account",
    "blocks": [
      {
        "p": "You can use most of Turn the Cup without an account — the app works offline, and your data stays on your device. An account is required for cloud sync, friends, gifts and buying point packs."
      },
      {
        "ul": [
          "Accounts are created by signing in with Apple or Google. You are responsible for keeping access to that provider account secure.",
          "You are responsible for everything that happens under your account. Tell us promptly if you believe it has been used without your permission.",
          "Give accurate information. Do not impersonate anyone, and do not choose a display name that is misleading, offensive, or that belongs to someone else.",
          "One account per person. Do not create accounts to farm rewards, referrals or points.",
          "You can delete your account at any time from **Settings → Delete account**. See the [Privacy Policy](/privacy) for what that removes."
        ]
      }
    ]
  },
  {
    "id": "licence",
    "title": "Your licence to use the app",
    "blocks": [
      {
        "p": "We grant you a personal, limited, non-exclusive, non-transferable, revocable licence to install and use the App on devices you own or control, for your own non-commercial entertainment, in line with these Terms and the App Store’s rules."
      },
      {
        "p": "We keep all rights not expressly granted. You may not sell, rent, sublicense or redistribute the App, and you may not copy, modify, translate, reverse engineer, decompile or disassemble it, or attempt to derive its source code, except where the law expressly permits it despite this restriction."
      }
    ]
  },
  {
    "id": "points",
    "title": "Coffee points and virtual items",
    "blocks": [
      {
        "p": "Coffee points are an in-app virtual currency. Cups, gifts and sent predictions are virtual items. Both exist only inside Turn the Cup."
      },
      {
        "h3": "How you get points"
      },
      {
        "ul": [
          "A bonus for your first turn of the day",
          "Streak milestones at 3, 7, 14 and 30 days, each paid once",
          "Referral rewards when someone who used your invite code keeps using the app",
          "Watching a rewarded ad, up to five per day",
          "Buying a point pack through the App Store"
        ]
      },
      {
        "h3": "What points are — and are not"
      },
      {
        "callout": [
          {
            "p": "**Coffee points have no monetary value.** They are a limited, revocable licence to use a feature of the App — not your property, not a bank balance, not a security, and not any kind of currency outside the App."
          }
        ],
        "icon": "⚠️"
      },
      {
        "ul": [
          "Points and virtual items cannot be exchanged for money or anything of real-world value.",
          "They cannot be sold, traded, gifted outside the App, transferred to another account, or inherited. Selling or buying accounts or points elsewhere is prohibited and voids them.",
          "Balances, prices and rewards are decided by our servers. If a bug, exploit or failed payment gives you points or items you were not entitled to, we may remove them and correct the balance.",
          "We may change prices, reward amounts, daily limits and the catalogue of cups and gifts at any time. Items you already own stay owned.",
          "Unused points are lost if your account is deleted or terminated, and are not refunded.",
          "If we discontinue Turn the Cup, points and virtual items end with it. We will give reasonable notice where we can, and will not sell new point packs once we have announced a shutdown."
        ]
      }
    ]
  },
  {
    "id": "purchases",
    "title": "Purchases, billing and refunds",
    "blocks": [
      {
        "p": "Point packs are one-off, consumable in-app purchases. All payments are handled by ** Apple** — never by us. We never see your card details."
      },
      {
        "ul": [
          "The price shown at checkout is the price you pay, in your App Store region’s currency, including any tax Apple collects. Apple charges the payment method on your Apple Account.",
          "Points are credited once the store confirms the purchase and our server verifies the receipt. If verification is delayed, the points arrive when it completes; if a charge is reversed, the corresponding points are removed.",
          "Purchases are consumed on delivery. Beyond the mandatory rights below, all sales are final and points are non-refundable.",
          "**Refunds are requested from Apple**, not from us — use [ reportaproblem.apple.com ](https://reportaproblem.apple.com) . We cannot issue, reverse or override Apple’s refund decision.",
          "If you are a consumer in the EEA or UK, you have a statutory 14-day right of withdrawal for digital content. By buying a point pack and receiving the points immediately, you ask for delivery to begin at once and acknowledge that you lose that right on delivery. Nothing here limits any other mandatory consumer right you have.",
          "Keep your device secure and use Apple’s purchase controls. You are responsible for purchases made from your device, including by anyone you let use it."
        ]
      }
    ]
  },
  {
    "id": "ads",
    "title": "Rewarded ads",
    "blocks": [
      {
        "p": "Turn the Cup shows rewarded video ads supplied by Google AdMob, and only when you choose to watch one for points. There are no banners, no interstitials and no ads that interrupt you. Ads are optional — the App works fully without ever watching one."
      },
      {
        "ul": [
          "Rewards are granted only after Google verifies the ad was genuinely watched.",
          "Interfering with ad delivery or verification — emulators, automation, click fraud, tampering with the reward callback — is a breach of these Terms and forfeits the points.",
          "Ad content comes from advertisers, not from us. We do not endorse it and are not responsible for it. Report anything inappropriate to us and to Google.",
          "Advertising consent and personalisation are covered in the [Privacy Policy](/privacy)."
        ]
      }
    ]
  },
  {
    "id": "community",
    "title": "Friends and community rules",
    "blocks": [
      {
        "p": "Turn the Cup’s social layer lets you connect with friends by invite code, share a reading as a story, send a friend a prediction with a short message, and send gifts. There are no public profiles and no way to find a stranger."
      },
      {
        "callout": [
          {
            "p": "**We have zero tolerance for objectionable content or abusive behaviour.** Anyone who posts it or engages in it can be removed from Turn the Cup without warning."
          }
        ],
        "icon": "🚫",
        "tone": "hot"
      },
      {
        "h3": "What is not allowed"
      },
      {
        "p": "In anything you write, send or share — including your display name — you must not:"
      },
      {
        "ul": [
          "Harass, bully, threaten, stalk or intimidate anyone",
          "Post hate speech, or attack people over race, ethnicity, national origin, religion, disability, sex, gender identity, sexual orientation or age",
          "Send sexually explicit or pornographic material, or anything sexualising a minor",
          "Post violent, gory or shocking content, or content that glorifies self-harm, suicide or eating disorders",
          "Promote illegal activity, drugs, weapons, gambling, scams, pyramid schemes or fraud",
          "Impersonate another person, or misrepresent who you are",
          "Share someone else’s private information without permission",
          "Send spam, chain messages, advertising or unsolicited promotion",
          "Post anything that infringes someone’s copyright, trademark or other rights",
          "Post malware, phishing links or anything designed to harm a device or account"
        ]
      },
      {
        "h3": "Reporting and blocking"
      },
      {
        "p": "Every user has both tools, always available:"
      },
      {
        "ul": [
          "**Block** — open the person’s profile and block them. All interaction between you stops immediately, in both directions.",
          "**Report** — report a person or something they sent, with a reason. Reports reach us directly for human review.",
          "You can also email [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com) or use the [contact form](/contact)."
        ]
      },
      {
        "h3": "How we act on reports"
      },
      {
        "p": "We review every report and **act within 24 hours** of receiving it. Depending on what we find, we remove the content, warn the account, restrict its social features, or terminate it and block the user from the service. Decisions about serious abuse are final."
      },
      {
        "p": "By using the social features you agree that there is no tolerance for objectionable content or abusive users, and that we may remove content and terminate accounts to enforce that."
      }
    ]
  },
  {
    "id": "your-content",
    "title": "Your content",
    "blocks": [
      {
        "p": "“Your content” means what you create in the App: your display name, the messages you write when sending a prediction, the readings you choose to share as stories, your reactions, and any report text."
      },
      {
        "ul": [
          "You keep ownership of your content, and you are responsible for it. Do not post content you do not have the right to post.",
          "You grant us a worldwide, non-exclusive, royalty-free licence to host, store, reproduce, transmit and display your content for the sole purpose of operating the App — for example, delivering the prediction you sent to the friend you sent it to. This licence ends when the content is deleted, except for copies already delivered to another user and backups that expire on their normal cycle.",
          "We do not pre-screen content, but we may review, remove or refuse any content that breaches these Terms.",
          "Content you send to another person stays in their copy after you delete yours, as it does with any messaging app."
        ]
      }
    ]
  },
  {
    "id": "our-content",
    "title": "Our content",
    "blocks": [
      {
        "p": "The App, the Turn the Cup name and logo, the prediction catalogue, the cup and gift artwork, the interface, the animations and the underlying software are owned by us or our licensors and protected by copyright, trademark and other laws."
      },
      {
        "ul": [
          "Readings are for your personal enjoyment. Share a screenshot with friends or on social media freely, but do not republish the catalogue in bulk, or use it to build a competing product or dataset.",
          "Do not scrape, mine, or use automated tools to extract content from the App or its servers.",
          "Do not use our name, logo or artwork in a way that suggests we endorse you."
        ]
      }
    ]
  },
  {
    "id": "prohibited",
    "title": "Things you must not do",
    "blocks": [
      {
        "p": "You agree not to:"
      },
      {
        "ul": [
          "Break any law, or infringe anyone’s rights, using the App",
          "Access another user’s account, or try to",
          "Probe, scan, overload or disrupt the App, our servers, or the networks behind them",
          "Bypass, disable or interfere with security features, rate limits or row-level access rules",
          "Modify the App, run it on a jailbroken or rooted device to gain an advantage, or use unofficial clients, bots, emulators or automation",
          "Exploit bugs to obtain points, cups, gifts or rewards — report them to us instead",
          "Create multiple or automated accounts, or abuse the referral and invite system",
          "Use the App commercially, or resell access to it"
        ]
      }
    ]
  },
  {
    "id": "availability",
    "title": "Changes to the app",
    "blocks": [
      {
        "p": "Turn the Cup is under active development. We may add, change, suspend or remove features, adjust the prediction catalogue, retune the points economy, or change how anything works, at any time."
      },
      {
        "p": "We may also stop offering the App entirely. If we do, we will give reasonable notice where we can, and stop selling point packs once a shutdown is announced. The App is provided as it is — we do not promise uninterrupted or error-free availability, and features that depend on the network, the App Store, or ad providers may be unavailable at times."
      }
    ]
  },
  {
    "id": "termination",
    "title": "Suspension and termination",
    "blocks": [
      {
        "p": "You can stop at any time by deleting your account in the App and uninstalling it."
      },
      {
        "p": "We may suspend or terminate your access, with notice where practical and immediately where the breach is serious, if you break these Terms, abuse other users, exploit the App, or use it in a way that creates legal risk for us or others."
      },
      {
        "p": "On termination, your licence to use the App ends and any remaining coffee points and virtual items are forfeited without refund. Sections that by their nature should survive — content licences, disclaimers, limitation of liability, indemnity and governing law — continue to apply."
      }
    ]
  },
  {
    "id": "disclaimers",
    "title": "Disclaimers",
    "blocks": [
      {
        "p": "The App is provided **“as is” and “as available”**, without warranties of any kind, whether express, implied or statutory, including implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, to the fullest extent permitted by law."
      },
      {
        "p": "We do not warrant that:"
      },
      {
        "ul": [
          "The App will be uninterrupted, timely, secure or error-free",
          "Any content in the App is accurate, reliable or fit for any purpose — it is entertainment",
          "Defects will be corrected, or that data will never be lost",
          "Content sent by other users is lawful, accurate or inoffensive"
        ]
      },
      {
        "p": "Some jurisdictions do not allow the exclusion of implied warranties, so parts of this section may not apply to you. Nothing here affects your mandatory rights as a consumer."
      }
    ]
  },
  {
    "id": "liability",
    "title": "Limitation of liability",
    "blocks": [
      {
        "p": "To the fullest extent permitted by law, Turn the Cup and anyone working with us will not be liable for any indirect, incidental, special, consequential, exemplary or punitive damages, or for lost profits, lost data, lost goodwill, or lost coffee points or virtual items, arising from or connected with your use of the App — including anything you did or did not do in reliance on a reading."
      },
      {
        "p": "Our total liability for all claims relating to the App is limited to the greater of the amount you paid us through in-app purchases in the twelve months before the claim, or US $50."
      },
      {
        "p": "Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot be limited by law. If you are a consumer, your mandatory statutory rights are unaffected."
      }
    ]
  },
  {
    "id": "indemnity",
    "title": "Indemnity",
    "blocks": [
      {
        "p": "You agree to indemnify and hold us harmless from any claim, demand, loss or expense — including reasonable legal fees — arising from your content, your use of the App, your breach of these Terms, or your violation of any law or of anyone else’s rights."
      }
    ]
  },
  {
    "id": "stores",
    "title": "Apple and the App Store",
    "blocks": [
      {
        "p": "These Terms are between you and us only. Apple is not a party to them and is not responsible for the App."
      },
      {
        "ul": [
          "Apple has no obligation to provide maintenance or support for the App, and no responsibility for addressing any claim about it — including product liability, a failure to conform to legal requirements, or a claim under consumer protection or privacy law.",
          "If the App fails to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price, if any. To the maximum extent permitted by law, Apple has no other warranty obligation whatsoever.",
          "Apple is responsible for handling claims that the App or your use of it infringes a third party’s intellectual property rights only to the extent required by the App Store terms; otherwise we are.",
          "You confirm you are not located in a country subject to a US Government embargo or designated as a “terrorist supporting” country, and are not on any US Government list of prohibited or restricted parties.",
          "** Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you. **"
        ]
      }
    ]
  },
  {
    "id": "law",
    "title": "Governing law",
    "blocks": [
      {
        "p": "These Terms are governed by the laws of Ukraine, where the developer is based, without regard to conflict-of-law rules. Disputes that cannot be resolved informally will be brought before the competent courts of Ukraine."
      },
      {
        "p": "**If you are a consumer, this does not take anything away from you.** You keep the protection of the mandatory consumer laws of the country where you live, and you may bring proceedings in your local courts where the law gives you that right. Consumers in the EU can also use the European Commission’s [ Online Dispute Resolution platform ](https://ec.europa.eu/consumers/odr) ."
      },
      {
        "p": "Please email us first — almost everything is settled faster that way than through a court."
      }
    ]
  },
  {
    "id": "changes",
    "title": "Changes to these terms",
    "blocks": [
      {
        "p": "We may update these Terms as the App changes. The “last updated” date at the top always reflects the current version. For material changes we will give notice in the App before they take effect, and where required we will ask you to accept them."
      },
      {
        "p": "Continuing to use Turn the Cup after a change takes effect means you accept the updated Terms. If you do not accept them, delete your account and stop using the App."
      }
    ]
  },
  {
    "id": "contact",
    "title": "Contact",
    "blocks": [
      {
        "p": "Questions about these Terms, or a report you need us to look at:"
      },
      {
        "ul": [
          "**Email:** [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com)",
          "**Support form:** [Contact Support](/contact)"
        ]
      },
      {
        "p": "If any part of these Terms is found unenforceable, the rest stays in force. Our not enforcing something straight away does not waive our right to enforce it later."
      }
    ]
  }
],
}

export default termsEn
