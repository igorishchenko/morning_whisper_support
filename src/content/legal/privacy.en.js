/**
 * Privacy Policy — English (source of truth).
 *
 * Structured content, not JSX: the same shape is rendered for all four locales
 * by components/LegalDoc.jsx. Inline markup is **bold** and [label](href);
 * hrefs starting with '/' become router links.
 */
export const privacyEn = {
  eyebrow: 'Legal',
  title: 'Privacy Policy',
  lede:
    'How Turn the Cup handles your information — what stays on your device, what syncs to our servers when you sign in, what your friends can see, and how to get it all deleted.',
  updatedLabel: 'Last updated:',
  updated: '1 September 2026',
  tocTitle: 'On this page',
  meta: {
    title: 'Privacy Policy — Turn the Cup',
    description:
      'How Turn the Cup collects, uses and protects your data: what stays on your device, what syncs, what we never collect, and how to delete your account.',
  },
  sections: [
  {
    "id": "overview",
    "title": "Who we are",
    "blocks": [
      {
        "p": "Turn the Cup (“Turn the Cup”, “we”, “our”, or “us”) is an independently developed app for iPhone and iPad. You finish your coffee, turn the cup, and read the prediction on its base. Around that sit collectible cups, coffee points, and an optional friends layer."
      },
      {
        "p": "This Privacy Policy explains what information the app handles, why, and what control you have over it. It applies to the Turn the Cup mobile app (bundle identifier ** com.entertainment.turnthecup**) and to this support website."
      },
      {
        "p": "For the purposes of the EU/UK General Data Protection Regulation, the developer of Turn the Cup is the data controller. You can reach us any time at [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com)."
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
            "p": "**Turn the Cup exists for fun.** Readings — predictions, affirmations, advice, quotes, jokes, questions and the rest — are written by us as entertainment. They are not fortune telling, not psychic services, and not professional advice of any kind."
          },
          {
            "p": "Nothing in the app is based on any scientific, medical, financial, legal or factual method, and nothing in it should be used to make an important decision. You are responsible for your own choices. See our [Terms of Use](/terms) for the full disclaimer."
          }
        ],
        "icon": "☕",
        "tone": "hot"
      }
    ]
  },
  {
    "id": "modes",
    "title": "Two ways to use the app",
    "blocks": [
      {
        "p": "How much data leaves your device depends entirely on whether you sign in. Both modes are fully supported — the app works offline and without an account."
      },
      {
        "h3": "Signed out (local only)"
      },
      {
        "p": "Everything lives on your device: your setup answers, reading history, streak, coffee points and preferences are held in the app’s local storage and never reach our servers. Deleting the app deletes this data. The only information that can leave your device in this mode is advertising data, and only if you choose to watch a rewarded ad."
      },
      {
        "h3": "Signed in (cloud sync and friends)"
      },
      {
        "p": "Signing in with Apple or Google creates an account on our backend, hosted on Supabase. Your history, settings, cups, points and social activity are then stored on our servers so they survive a reinstall or a new phone, and so friends features can work. The sections below describe exactly what that includes."
      }
    ]
  },
  {
    "id": "collect",
    "title": "Information we collect",
    "blocks": [
      {
        "h3": "1. Account information"
      },
      {
        "p": "You can sign in with **Sign in with Apple** or **Google**. We receive a user identifier and, depending on what you allow, your email address and the name on your provider account. We never receive your Apple or Google password."
      },
      {
        "ul": [
          "If you use Apple’s Hide My Email, we only ever see the relay address Apple generates — that is fine, everything works the same way.",
          "Authentication is handled by Supabase Auth. Session tokens are stored in your device’s secure keychain (iOS Keychain), not in ordinary app storage."
        ]
      },
      {
        "h3": "2. Your profile and preferences"
      },
      {
        "ul": [
          "**Display name** — the name you type during setup, visible to friends.",
          "**Avatar** — an ID and colour for one of eight preset drawn faces. There is no photo upload in Turn the Cup, so we never receive a picture of you.",
          "**Setup answers** — the optional mood, energy, life-focus and current situation choices that tune which readings you are shown, plus your collection preferences.",
          "**Language** — English, Spanish, French or Ukrainian.",
          "**Notification schedule** — the times you set, if you enable reminders.",
          "**Equipped cup** — which collectible cup you currently use."
        ]
      },
      {
        "h3": "3. Your activity in the app"
      },
      {
        "ul": [
          "**Reading history** — which prediction you received, when, in which cup, and whether you marked it a favourite.",
          "**Streak and engagement** — daily streak count, milestones reached, daily state.",
          "**Coffee points ledger** — every credit and debit: daily bonuses, streak milestones, rewarded ads, referrals, purchased packs, and what you spent on cups, sends and gifts.",
          "**Owned and purchased cups.**",
          "**Installations** — a per-device record (a generated installation ID and platform) so the same account can sync across your devices.",
          "**Usage counters** — app-open times, daily session counts and a capped log of in-app events (app opened, reading generated, streak reached, and similar). These are stored in your own account rows on our backend. We do not use Google Analytics, Firebase Analytics, Amplitude, Mixpanel, or any other third-party analytics SDK."
        ]
      },
      {
        "h3": "4. Social data (only if you use friends features)"
      },
      {
        "ul": [
          "**Friendships** — who you are connected with.",
          "**Invite codes** — the code you generate, and a record of which account redeemed it, so referral rewards can be paid.",
          "**Stories / shares** — a reading you choose to share with friends, its text, the cup it appeared in, and the emoji reactions others leave on it.",
          "**Sent predictions** — when you send a prediction to a friend you write a short message (up to 280 characters). We store that text, the sender, the recipient, the cup, and whether it has been read.",
          "**Gifts** — the item sent, its price, one of eight preset messages (we store the number, not free text), and when it was opened.",
          "**Blocks and reports** — if you block or report someone, we store who blocked or reported whom and the reason text you provide, so we can review it."
        ]
      },
      {
        "h3": "5. Device and technical data"
      },
      {
        "ul": [
          "**Push token** — an Expo push token plus your platform and language, if you allow notifications.",
          "**Advertising identifiers** — handled by Google AdMob when you watch a rewarded ad. See [Advertising and consent](#ads).",
          "**Purchase receipts** — a transaction ID and product ID passed to RevenueCat for verification. See [Purchases and coffee points](#purchases).",
          "**Server logs** — our hosting provider records standard request metadata (IP address, timestamp, endpoint) for security and abuse prevention."
        ]
      },
      {
        "h3": "6. Information you send us directly"
      },
      {
        "p": "If you use the [contact form](/contact) on this site or email us, we receive your name, email address and whatever you write, and we keep it for as long as needed to resolve your request."
      }
    ]
  },
  {
    "id": "not-collected",
    "title": "What we never collect",
    "blocks": [
      {
        "p": "Turn the Cup does not request, collect or store:"
      },
      {
        "ul": [
          "Your precise or approximate location",
          "Your contacts, calendar, photos, camera or microphone",
          "Health, fitness or biometric data",
          "Payment card numbers or bank details — Apple handles all payments",
          "Your date of birth, postal address or phone number",
          "Any uploaded photo or profile picture (avatars are drawn presets only)"
        ]
      }
    ]
  },
  {
    "id": "use",
    "title": "How we use information",
    "blocks": [
      {
        "p": "We use your information only for the purposes below. Where the GDPR applies, the legal basis for each purpose is listed."
      },
      {
        "table": {
          "head": [
            "Purpose",
            "Data used",
            "Legal basis (GDPR)"
          ],
          "rows": [
            [
              "Run the app and pick your daily reading",
              "Setup answers, preferences, history, streak",
              "Performance of a contract"
            ],
            [
              "Sync your data across devices",
              "Account ID, profile, history, settings, installations",
              "Performance of a contract"
            ],
            [
              "Friends, stories, sends and gifts",
              "Social data listed above",
              "Performance of a contract (you choose to use it)"
            ],
            [
              "Coffee points, purchases and fraud prevention",
              "Points ledger, transaction and product IDs",
              "Contract; legitimate interest in preventing abuse"
            ],
            [
              "Send push notifications",
              "Push token, platform, locale",
              "Consent (device permission)"
            ],
            [
              "Show rewarded ads",
              "Advertising identifiers, ad interaction",
              "Consent in the EEA/UK/Switzerland; legitimate interest elsewhere"
            ],
            [
              "Keep the service safe — blocks, reports, moderation",
              "Reports, blocks, related account IDs",
              "Legitimate interest; legal obligation"
            ],
            [
              "Improve the app",
              "Aggregate usage counters",
              "Legitimate interest"
            ],
            [
              "Answer your support messages",
              "What you send us",
              "Legitimate interest"
            ]
          ]
        }
      },
      {
        "p": "We do not sell your personal information, and we do not use your data to build advertising profiles ourselves."
      }
    ]
  },
  {
    "id": "social",
    "title": "What other people can see",
    "blocks": [
      {
        "p": "Turn the Cup has no public profiles and no discovery. Nobody can find you by name, email or phone number — connections are made only by sharing an invite code. Once you are friends, that person can see:"
      },
      {
        "ul": [
          "Your display name and preset avatar",
          "Readings you deliberately share as a story, and the cup art around them",
          "Predictions you send them, including the message you write",
          "Gifts you send them",
          "Your shelf of gifts, where the app shows it"
        ]
      },
      {
        "p": "Friends never see your history, your favourites, your streak, your points balance, your setup answers or your email address. Push notifications about a send name the sender but never carry the message text; gift notifications name the sender but never the item."
      },
      {
        "p": "You can block someone at any time from their profile, which stops all interaction between you, and you can report content or behaviour for review. See the [Terms of Use](/terms) for our content rules."
      }
    ]
  },
  {
    "id": "sharing",
    "title": "Who we share data with",
    "blocks": [
      {
        "p": "We do not sell, rent or trade your personal information. We use a small number of service providers to run the app, each processing only what their function requires:"
      },
      {
        "table": {
          "head": [
            "Provider",
            "What it does",
            "Privacy policy"
          ],
          "rows": [
            [
              "Supabase",
              "Database, authentication, storage and server functions",
              "[supabase.com/privacy](https://supabase.com/privacy)"
            ],
            [
              "Apple",
              "Sign in with Apple, App Store distribution, in-app purchases, push delivery",
              "[apple.com/legal/privacy](https://www.apple.com/legal/privacy/)"
            ],
            [
              "Google",
              "Google Sign-In",
              "[policies.google.com/privacy](https://policies.google.com/privacy)"
            ],
            [
              "Google AdMob",
              "Rewarded video ads and consent management",
              "[policies.google.com/technologies/ads](https://policies.google.com/technologies/ads)"
            ],
            [
              "RevenueCat",
              "Verifying in-app purchase receipts",
              "[revenuecat.com/privacy](https://www.revenuecat.com/privacy)"
            ],
            [
              "Expo",
              "Push notification delivery and app builds",
              "[expo.dev/privacy](https://expo.dev/privacy)"
            ],
            [
              "Resend",
              "Delivering messages sent through the contact form on this site",
              "[resend.com/legal/privacy-policy](https://resend.com/legal/privacy-policy)"
            ]
          ]
        }
      },
      {
        "p": "We may also disclose information if we are legally required to, or where it is necessary to investigate abuse, enforce our [Terms of Use](/terms), or protect the rights and safety of our users. If the app is ever transferred to another owner, your data may move with it, and we will say so here before that takes effect."
      }
    ]
  },
  {
    "id": "ads",
    "title": "Advertising and consent",
    "blocks": [
      {
        "p": "Turn the Cup shows **rewarded video ads only**, supplied by Google AdMob. There are no banners, no interstitials and no ads that appear on their own. An ad plays only when you tap to watch one in exchange for coffee points, up to five per day."
      },
      {
        "h3": "What AdMob receives"
      },
      {
        "ul": [
          "Your device advertising identifier (the IDFA)",
          "IP address, and device information such as model and OS version",
          "Ad interaction data — that an ad was requested, shown and completed"
        ]
      },
      {
        "p": "Google’s use of this information is governed by the [ Google Advertising Privacy Policy ](https://policies.google.com/technologies/ads) . To make sure a reward is genuine, we also pass AdMob a one-time random number, which Google returns to our server in a signed verification callback. It contains no personal information about you."
      },
      {
        "h3": "Consent in the EEA, UK and Switzerland (GDPR)"
      },
      {
        "p": "Before any ad is requested, the app presents Google’s certified consent form (the User Messaging Platform, or UMP) as required by the GDPR and Google’s EU user consent policy. Your choice is recorded on your device."
      },
      {
        "ul": [
          "If you consent, you may be shown personalised ads.",
          "If you refuse, or if no consent has been recorded, the app requests ** non-personalised ads only**.",
          "If you do not allow ads at all, the rewarded-ad feature simply does not run. Nothing else in Turn the Cup is affected — ads are never required to use the app."
        ]
      },
      {
        "p": "You can withdraw your consent at any time by resetting your advertising identifier in your device settings, or by emailing us at [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com) and we will action it."
      },
      {
        "h3": "App Tracking Transparency (iOS)"
      },
      {
        "p": "On iOS, the system asks for your permission before any tracking identifier can be used for advertising. If you decline, ads are non-personalised. You can change this any time in **Settings → Privacy & Security → Tracking**."
      },
      {
        "h3": "Device-level opt-outs"
      },
      {
        "ul": [
          "**iOS:** Settings → Privacy & Security → Apple Advertising → Personalised Ads"
        ]
      },
      {
        "p": "You will still see rewarded ads if you choose to watch them; they will just be less relevant."
      }
    ]
  },
  {
    "id": "purchases",
    "title": "Purchases and coffee points",
    "blocks": [
      {
        "p": "Coffee points are an in-app virtual currency. You earn them by using the app — a daily bonus, streak milestones, referrals and rewarded ads — and you can also buy point packs."
      },
      {
        "p": "**All payments are processed by Apple.** We never see or store your card number, billing address or any payment credential. When a purchase completes, the App Store gives the app a transaction ID and product ID, which we pass to RevenueCat and our server to verify the receipt is genuine and to credit the right number of points. Your points balance and its full history live in your account on our backend."
      },
      {
        "p": "Coffee points have no monetary value, cannot be exchanged for money, and cannot be transferred outside the app. Refunds are handled by Apple under its own policies — see the [Terms of Use](/terms)."
      }
    ]
  },
  {
    "id": "notifications",
    "title": "Push notifications",
    "blocks": [
      {
        "p": "Notifications are optional and off until you allow them. If you do, we store an Expo push token for your device along with your platform and language so messages arrive in the right language. Delivery runs through the Expo push service to Apple’s Push Notification service."
      },
      {
        "p": "We use notifications for your own reminders, and to tell you when a friend sends you a prediction or a gift. We never use them for advertising."
      },
      {
        "p": "You can turn them off at any time in the app’s settings or in your device settings. Turning them off in your device settings stops delivery immediately; we remove the stored token when you sign out or delete your account."
      }
    ]
  },
  {
    "id": "transfers",
    "title": "International transfers",
    "blocks": [
      {
        "p": "Turn the Cup is available worldwide, and our service providers operate globally. Your data may therefore be processed in countries outside your own, including the United States."
      },
      {
        "p": "Where data is transferred out of the EEA, the UK or Switzerland, our providers rely on the European Commission’s Standard Contractual Clauses, the UK International Data Transfer Addendum, or an adequacy decision, as set out in their own privacy documentation linked in [Who we share data with](#sharing)."
      }
    ]
  },
  {
    "id": "retention",
    "title": "How long we keep data",
    "blocks": [
      {
        "table": {
          "head": [
            "Data",
            "Retention"
          ],
          "rows": [
            [
              "Local device data (signed out)",
              "Until you clear the app’s data or uninstall it"
            ],
            [
              "Account, profile, history, points and cups",
              "Until you delete your account"
            ],
            [
              "Stories and shares",
              "Until you remove them or delete your account"
            ],
            [
              "Sent predictions and gifts",
              "Kept for both sender and recipient until either deletes their account"
            ],
            [
              "Usage counters",
              "Capped at the most recent 1,000 events per account"
            ],
            [
              "Push tokens",
              "Removed when you sign out, disable notifications, or delete your account"
            ],
            [
              "Reports and blocks",
              "Up to 12 months after review, for safety and repeat-abuse detection"
            ],
            [
              "Purchase records",
              "As long as required for tax, accounting and dispute handling"
            ],
            [
              "Support emails",
              "Up to 24 months after your request is resolved"
            ]
          ]
        }
      }
    ]
  },
  {
    "id": "security",
    "title": "Security",
    "blocks": [
      {
        "ul": [
          "All traffic between the app and our servers uses TLS encryption.",
          "Every table on our backend is protected by row-level security policies, so an account can only ever read and write its own rows. Points, prices and purchases are decided by the server, never trusted from the client.",
          "Authentication sessions are stored in the device keychain, not in ordinary app storage.",
          "Payment credentials never reach us — Apple holds them."
        ]
      },
      {
        "p": "No system is perfectly secure, and we cannot guarantee absolute security. If we ever become aware of a breach affecting your personal data, we will notify you and the relevant supervisory authority as the law requires."
      }
    ]
  },
  {
    "id": "rights",
    "title": "Your rights",
    "blocks": [
      {
        "h3": "If you are in the EEA, UK or Switzerland (GDPR)"
      },
      {
        "p": "You have the right to:"
      },
      {
        "ul": [
          "Access the personal data we hold about you, and receive a copy",
          "Have inaccurate data corrected",
          "Have your data erased",
          "Restrict or object to certain processing, including processing based on legitimate interests",
          "Receive your data in a portable, machine-readable format",
          "Withdraw consent at any time, without affecting processing that already happened",
          "Lodge a complaint with your local data protection authority"
        ]
      },
      {
        "h3": "If you are in California (CCPA/CPRA)"
      },
      {
        "p": "You have the right to know what we collect, to have it deleted, to have it corrected, and to not be discriminated against for exercising those rights."
      },
      {
        "p": "**We do not sell personal information** and we do not share it for cross-context behavioural advertising, other than through the AdMob consent choice described in [Advertising and consent](#ads), which you control. Refusing consent or disabling your advertising identifier is your opt-out."
      },
      {
        "h3": "How to exercise them"
      },
      {
        "p": "Most of it is one tap away — see [Deleting your data](#deletion). For anything else, email [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com) from the address on your account, or use the [contact form](/contact). We reply within 30 days, and we do not charge for it."
      }
    ]
  },
  {
    "id": "deletion",
    "title": "Deleting your data",
    "blocks": [
      {
        "h3": "From inside the app"
      },
      {
        "p": "Open **Settings → Delete account** and confirm. This immediately removes your profile, reading history, streak and engagement data, settings, usage counters, device installations and push tokens from our servers, wipes everything held locally on the device, and signs you out."
      },
      {
        "h3": "Completing the erasure"
      },
      {
        "p": "Your underlying authentication record and your social records — friendships, invite redemptions, stories, sent predictions and gifts — are removed by us as part of a full account erasure. Email [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com) from the address on your account and we will complete it within 30 days and confirm when it is done."
      },
      {
        "h3": "Without an account"
      },
      {
        "p": "If you never signed in, uninstalling the app removes everything, because nothing was ever stored anywhere else."
      },
      {
        "h3": "What may remain"
      },
      {
        "p": "We keep the minimum needed for legal reasons: purchase records required for tax and accounting, and reports filed about serious abuse. Content you sent to another person — a prediction or a gift they received — stays in their copy, as it does with any messaging app."
      }
    ]
  },
  {
    "id": "children",
    "title": "Children’s privacy",
    "blocks": [
      {
        "p": "Turn the Cup is not directed at children. You must be at least 13 years old to use it, and at least 16 in countries where 16 is the minimum age for consent to data processing, unless a parent or guardian consents on your behalf."
      },
      {
        "p": "We do not knowingly collect personal information from children below those ages. If you believe a child has provided us with personal information, email us and we will delete the account and its data promptly."
      }
    ]
  },
  {
    "id": "changes",
    "title": "Changes to this policy",
    "blocks": [
      {
        "p": "We update this policy when the app changes. The “last updated” date at the top always reflects the current version. For material changes we will give notice in the app before they take effect. Continuing to use Turn the Cup after a change means you accept the updated policy."
      }
    ]
  },
  {
    "id": "contact",
    "title": "Contact us",
    "blocks": [
      {
        "p": "Questions about this policy, a data request, or anything else:"
      },
      {
        "ul": [
          "**Email:** [ischenko.vadyus@gmail.com](mailto:ischenko.vadyus@gmail.com)",
          "**Support form:** [Contact Support](/contact)"
        ]
      },
      {
        "p": "We usually reply within 24–48 hours, and always within 30 days for privacy requests."
      }
    ]
  }
],
}

export default privacyEn
