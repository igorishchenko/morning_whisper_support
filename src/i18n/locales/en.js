/**
 * English — the source of truth. Every other locale mirrors this shape; a key
 * missing from a translation falls back to the string here.
 *
 * Not translated anywhere: cup names (art titles, deliberately untranslated in
 * the app's own catalogue), the brand name, and the support email address.
 */
export const en = {
  nav: {
    home: 'Home',
    support: 'Support',
    privacy: 'Privacy',
    terms: 'Terms',
    cta: 'Get the app',
    language: 'Change language',
    skip: 'Skip to content',
  },

  footer: {
    tagline:
      'Finish your coffee, turn the cup, read what the grounds left on the bottom. A daily reading for iPhone and iPad.',
    appStore: 'Download on the App Store',
    home: 'Home',
    contact: 'Contact Support',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    legal:
      'Turn the Cup is an entertainment app. Readings are written for amusement and are not advice.',
    rights: 'Turn the Cup.',
  },

  store: {
    downloadOn: 'Download on the',
    appStore: 'App Store',
    note: 'Free · iPhone & iPad',
  },

  landing: {
    meta: {
      title: 'Turn the Cup — finish your coffee, then read the bottom',
      description:
        'Finish your coffee. Turn the cup. Read the prediction the grounds left on the bottom. 2,350+ hand-edited readings, 18 collectible cups, streaks and friends. Free on iPhone and iPad.',
    },

    hero: {
      eyebrow: 'Daily prediction · iPhone & iPad',
      titleLead: 'Finish your coffee.',
      titleAccent: 'Then turn the cup.',
      lede:
        'Tea, cocoa, or nothing at all — the cup doesn’t mind. Turn it over and read what the grounds left on the bottom. One a day, yours to keep.',
      statReadings: 'readings, each one edited by hand',
      statCups: 'cups to collect, each turning its own way',
      statLanguages: 'languages, written not translated',
    },

    cup: {
      tap: 'Tap the cup to turn it',
      reading: 'Reading the grounds…',
      setBack: 'Set the Cup Back',
      turnLabel: 'Turn the cup to read today’s prediction',
      setBackLabel: 'Set the cup back',
    },

    rarity: {
      common: 'Common prediction',
      rare: 'Rare prediction',
      epic: 'Epic prediction',
      legendary: 'Legendary prediction',
      classic: 'Classic',
      rareShort: 'Rare',
      epicShort: 'Epic',
      legendaryShort: 'Legendary',
      points: 'pts',
    },

    ritual: {
      eyebrow: 'The ritual',
      title: 'Three seconds, once a day',
      lede:
        'Coffee already has a rhythm. Turn the Cup slips into the gap at the end of it — no feed to catch up on, nothing to scroll past.',
      steps: [
        {
          title: 'Finish your coffee',
          body:
            'Tea, cocoa, or nothing at all — the cup doesn’t mind. There is no streak to protect on day one and nothing to set up first.',
        },
        {
          title: 'Turn the cup',
          body:
            'Tap it and let it go over. Every cup has its own move — a waltz, a bottle flip, a slow tasseography roll — and the grounds read while it turns.',
        },
        {
          title: 'Read the bottom',
          body:
            'One prediction, printed on the base of the cup you turned it in. Keep it, favourite it, or send it to someone you drink coffee with.',
        },
      ],
    },

    wall: {
      eyebrow: 'The writing',
      title: 'Written like a friend, not a fortune cookie',
      lede:
        'Every reading is edited against a house style before it ever reaches a cup: concrete, a little wry, never preachy. Some are rarer than others. These are real ones.',
    },

    cups: {
      eyebrow: 'The collection',
      title: 'Eighteen cups. Eighteen ways to turn one.',
      lede:
        'A diner mug lands heavy. A ribbed plum cup turns like a ballerina. Every cup carries its own base art, so the reading you get is printed on the cup you got it in.',
    },

    points: {
      eyebrow: 'Coffee points',
      title: 'You can collect all of it just by turning up',
      body1:
        'Showing up is the currency. Your first turn each day pays, and the streak milestones pay properly — enough that a legendary cup is a month of mornings.',
      body2: 'The app is free and there is no subscription. Nothing expires if you skip a week.',
      earn: [
        'First turn of the day',
        '3-day streak',
        '7-day streak',
        '14-day streak',
        '30-day streak',
        'A friend you invited sticks around',
      ],
    },

    friends: {
      eyebrow: 'With friends',
      title: 'Show it to the people you drink coffee with',
      body:
        'Send a reading straight into a friend’s next turn — it arrives instead of the catalog’s pick, with your name on it. See what they have been reading all week. Invite someone and you are friends the moment they open the app.',
      note:
        'Blocking takes effect the moment you tap it, and every report is reviewed within 24 hours.',
    },

    features: {
      eyebrow: 'The details',
      title: 'Quietly well built',
      items: [
        {
          title: 'Works with no signal',
          body: 'The English catalog ships inside the app. Planes, tunnels, mountains — the cup still turns.',
        },
        {
          title: 'No account to start',
          body: 'Open it and turn. Sign in with Apple later only if you want your history to follow you.',
        },
        {
          title: 'Four languages',
          body: 'English, Spanish, French and Ukrainian — every prediction written in each, not machine-swapped at runtime.',
        },
        {
          title: 'Every reading kept',
          body: 'History remembers what you read, the day you read it, and the cup it arrived in. Favourite the ones that land.',
        },
        {
          title: 'Reminders you choose',
          body: 'One nudge at the hour you actually drink coffee. Or none at all — the setting is a real off switch.',
        },
        {
          title: 'Nothing sold on',
          body: 'No profile brokered, no reading history traded. Delete the account from Settings whenever you like.',
        },
      ],
    },

    faq: {
      eyebrow: 'Questions',
      title: 'Before you download',
      more: 'Still stuck?',
      moreLink: 'Write to us',
      moreTail: '— we read every message ourselves and usually reply within a day or two.',
      items: [
        {
          q: 'Is Turn the Cup free?',
          a: 'Yes. The app is free to download and there is no subscription. Your daily reading, your history and your streak cost nothing.',
        },
        {
          q: 'Is this real fortune telling?',
          a: 'No. Turn the Cup is an entertainment app. The predictions are written by our editors for amusement and reflection — they are not predictions of real events, and they are not advice.',
        },
        {
          q: 'Do I need an account?',
          a: 'Not to start. You can turn cups and build a streak straight away. Signing in with Apple backs your history and points up to the cloud and lets you add friends.',
        },
        {
          q: 'Does it work offline?',
          a: 'Yes. The English catalog is bundled with the app, so a daily reading never needs a connection. Spanish, French and Ukrainian download once, then work offline too.',
        },
        {
          q: 'How do I get more cups?',
          a: 'Cups are unlocked with coffee points — 100 for a classic, 250 rare, 600 epic, 1500 legendary. Points come from your first turn each day, from streak milestones, and from friends you invite who stick around.',
        },
        {
          q: 'What can I do with friends?',
          a: 'Send a reading straight into a friend’s next cup, see what they have been reading, and favourite the ones you want to keep. Blocking is immediate and reports are reviewed within 24 hours.',
        },
        {
          q: 'Is there an Android version?',
          a: 'Not yet. Turn the Cup is on iPhone and iPad for now.',
        },
        {
          q: 'How do I delete my data?',
          a: 'Settings → Delete account removes it in the app. For a full erasure of the underlying record, email us and we will complete it within 30 days.',
        },
      ],
    },


    /* Showcase content — the app's own writing, in this language. */
    predictions: [
      'An old idea comes back wearing better shoes.',
      'What you spilled yesterday watered something.',
      'Keep the receipt. Not for the money — for the date.',
      'The missing piece is in the pocket you never use.',
      'A message you almost didn’t send changes the month.',
      'The plan survives contact with Tuesday. Barely. Hold it.',
      'Two small kindnesses today. One returns within the week.',
      'The thing you call a detour is the route.',
      'Say yes before noon. The afternoon will explain itself.',
      'The long way home has news for you.',
      'Stop stirring. It is already sweet enough.',
      'The quiet one at the table knows. Ask twice.',
    ],

    /** Each cup's signature turn, keyed by cup id. */
    moves: {
      togo: 'Barista spin',
      mug: 'Heavyweight roll',
      jar: 'Rocking chair',
      latte: 'Waltz',
      iced: 'Cocktail shaker',
      thermos: 'Bottle flip',
      ribbed: 'Ballerina',
      boba: 'Pearl jump',
      cortado: 'Pour-over cascade',
      cappuccino: 'Waiter\'s slip',
      camp: 'Campfire kick',
      cocoa: 'Marshmallow bailout',
      frappe: 'Whipped wobble',
      chawan: 'Ceremony bow',
      fincan: 'Tasseography',
      dwall: 'Zero-G',
      tumbler: 'Gymnast',
      bottle: 'Cold-brew flip',
    },
    cta: {
      title: 'There is a cup waiting for you',
      body: 'Free, and no subscription.',
    },
  },

  contact: {
    meta: {
      title: 'Support — Turn the Cup',
      description:
        'Get help with Turn the Cup: missing points, refunds, blocking and reports, deleting your account, or anything else. We reply within 24–48 hours.',
    },
    eyebrow: 'Support',
    title: 'How can we help?',
    lede:
      'Trouble with your cup, your points, a friend request, or a purchase? Send us a note and we will get back to you. We read every message ourselves.',
    replyLabel: 'Typical reply time:',
    replyValue: '24–48 hours',

    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'Points missing after a purchase',
      message: 'Message',
      messagePlaceholder:
        'Tell us what happened. If it is about a purchase, the date and the pack you bought help a lot.',
      submit: 'Send message',
      sending: 'Sending…',
      noteLead: 'We use what you send only to answer you — see the',
      notePrivacy: 'Privacy Policy',
      success: 'Thanks — your message is on its way. We will reply to the email address you gave us.',
      errorLead: 'We could not send that.',
      errorNotConfigured: 'Backend API is not configured. Please email us directly at',
      errorBadJson: 'The support server is not responding correctly. Please email us directly at',
      errorUnavailable: 'The support server is unavailable. Please email us directly at',
      errorGeneric: 'Please try again, or email us directly at',
    },

    direct: {
      title: 'Reach us directly',
      email: 'Email:',
      replies: 'Replies usually within 24–48 hours',
      languages: 'English, Spanish, French and Ukrainian',
    },

    faqTitle: 'Common questions',
    faq: [
      {
        q: 'I bought points and they never arrived',
        a: 'Reopen the app while online — verification usually completes on its own. If it does not, email us with the purchase date and pack and we will credit it manually.',
      },
      {
        q: 'I want a refund',
        a: 'Refunds are handled by Apple, not by us. Use reportaproblem.apple.com.',
      },
      {
        q: 'Someone is bothering me',
        a: 'Block them from their profile — it stops all interaction immediately — and report them. We review every report and act within 24 hours.',
      },
      {
        q: 'How do I delete my account?',
        a: 'In the app: Settings → Delete account. For a full erasure of the underlying account record, email us and we will complete it within 30 days.',
      },
      {
        q: 'Lost my history after reinstalling',
        a: 'Sign in with the same Apple or Google account and your cups, points and history come back. History created while signed out lives only on that device.',
      },
    ],

    legalTitle: 'Legal',
  },
}

export default en
