/* Content for the Speak to Kit marketing site (Dan's copy from
   extracted-copy.zip, applied 2026-04-24). Read by index.html and
   for-jobseekers.html. */
window.STK_CONTENT = {
  nav: [
    {label:'How Kit Works', href:'index.html'},
    {label:'Pricing',       href:'pricing.html'},
    {label:'For Jobseekers',href:'for-jobseekers.html'},
  ],
  hero: {
    headline: 'Describe your ideal hire.',
    subHtml: '<strong>Kit</strong> finds them, screens them, and delivers a shortlist.',
    placeholder: 'find me a senior engineer, we’re rebuilding our platform…',
    ctaPrimary: 'Speak to Kit',
    ctaPrimaryShort: 'Speak',
    footnote: 'A sourcing plan in minutes. Free to start.',
    voicePrompt: 'Tap to speak',
    voiceActive: 'Listening… tap to stop',
    typeInstead: 'or type instead',
    secondaryLinks: [
      {label:'Ask Kit how it works'},
      {label:'See what jobseekers experience'},
    ],
  },
  stats: [
    {big:'10 min',  small:'to your sourcing plan'},
    {big:'3 hrs',   small:'to first screened shortlist'},
    {big:'9 in 10', small:'jobseekers said they’d speak to Kit again'},
    {big:'100%',    small:'of applicants screened by voice'},
  ],
  problem: {
    kicker: 'THE PROBLEM',
    title: 'Great hiring starts before the job ad.',
    columns: [
      {title:'Start with outcomes, not specs', body:'Kit asks what exceptional looks like in this role. Everything else flows from that.'},
      {title:'A plan, not a posting',          body:'Screening criteria, a top performer profile, and an advert built to attract the right people.'},
      {title:'A shortlist, not an inbox',      body:'Every applicant screened by voice. You meet the three who’d actually deliver.'},
    ],
  },
  how: {
    kicker: 'HOW KIT WORKS',
    titleLine1: 'Three conversations.',
    titleLine2: 'One exceptional hire.',
    steps: [
      {n:'01', title:'Kit learns what exceptional looks like', body:'A conversation about outcomes. Kit draws out what you actually need.'},
      {n:'02', title:'Kit builds your sourcing plan',          body:'By the end of the conversation, your sourcing plan is ready to execute.'},
      {n:'03', title:'Kit executes. You interview.',           body:'Kit attracts candidates, screens every applicant by voice, and alerts you when someone matches the top performer profile. You interview 3 people, not 30.'},
    ],
  },
  conversation: {
    kicker: 'THE CONVERSATION',
    title: 'What Kit builds from a single conversation',
    body: 'Ten minutes. Kit asks about outcomes, draws out what predicts success, and produces a sourcing plan ready to execute. Here’s what you get.',
    list: [
      'Top performer profile',
      'CV gap analysis',
      'Screening criteria',
      'High-performing job advert',
      'Voice screening for every applicant',
      'Top performer alerts',
    ],
    tryLabel: 'Try it now',
    chat: {
      who: 'Kit',
      role: 'AI Hiring Agent',
      bubbles: [
        {from:'kit',  text:'Your CV says you’ve been at Stripe-adjacent payments for three years. What’s making you look right now?'},
        {from:'user', text:'The team’s grown a lot and I’m doing more code review than building. I want to be back hands-on, ideally earlier-stage.'},
        {from:'kit',  text:'That tracks. The senior IC track here is genuinely IC, not management with a different name. What does “hands-on” look like for you in a good week?'},
        {from:'user', text:'System design, mostly. I like the bit before the code.'},
        {from:'kit',  text:'Good. The hiring manager flagged a piece of work coming up — rebuilding their ledger from SQL-on-Postgres to event-sourced. Done that in production?'},
        {from:'user', text:'Once, at a previous role. It went well — not at huge scale.'},
      ],
    },
  },
  testimonials: {
    kicker: 'WHAT PEOPLE SAY',
    title: 'After speaking to Kit',
    sub: 'Your jobseekers’ first impression is Kit. Here’s how it lands.',
    hero: {tag:'Impressive', quote:'I can only give you a ten out of ten.', name:'Jacques'},
    items: [
      {tag:'Feels human', quote:'Surprisingly authentic.',                                                    name:'David'},
      {tag:'AI convert',  quote:'I would prefer this approach rather than talking to a human. I’m a convert.', name:'Naveen'},
      {tag:'Insightful',  quote:'Your questions were very focused, laser direct.',                            name:'Mark B.'},
      {tag:'Feels human', quote:'It actually feels like a conversation, so it’s actually really nice.',  name:'Nishi B.'},
      {tag:'Impressive',  quote:'Very, very impressive experience.',                                          name:'Rod'},
      {tag:'Feels human', quote:'You soon forget you’re actually having a conversation with AI.',        name:'Richard'},
      {tag:'Impressive',  quote:'A really fantastic way to do an interview.',                                 name:'James F.'},
      {tag:'AI convert',  quote:'It may have altered in a positive sense my willingness for engaging with AI.', name:'Mathew C.'},
    ],
  },
  finalCta: {
    title: 'Ready to meet Kit?',
    sub: 'Tell Kit who you need. Interviews in hours.',
    button: 'Speak to Kit',
  },
};

window.STK_JOBSEEKER = {
  nav: [
    {label:'How Kit Works', href:'index.html'},
    {label:'Pricing',       href:'pricing.html'},
    {label:'For Employers', href:'index.html'},
  ],
  hero: {
    eyebrow: null,
    headline: 'Have you spoken to Kit?',
    tagline: 'Free. Confidential. 10 minutes.',
    body: 'Kit listens to where you’ve done your best work, what you’re looking for, and what matters to you. Then Kit shows you who’s hiring where someone already knows you’re good — the benefit of network hiring without the awkwardness of working your network.',
    cta: 'Speak to Kit',
  },
  features: [
    {title:'Confidential',      body:'Kit never contacts anyone without your permission'},
    {title:'10 minutes',        body:'Just a conversation about where you’ve done your best work'},
    {title:'Specific feedback', body:'If you’re not right for a role, Kit tells you exactly why and what to strengthen'},
    {title:'Proactive search',  body:'Kit finds other roles where your background and connections would be valued'},
  ],
  quotes: {
    title: 'Conversations that changed their careers',
    items: [
      {tag:'Feels human',  quote:'You soon forget you’re actually having a conversation with AI.',               name:'Richard'},
      {tag:'Feels human',  quote:'It was like talking to a human. This particular platform is actually really good.', name:'Pravesh'},
      {tag:'AI convert',   quote:'I would prefer this approach rather than talking to a human. I’m a convert.',  name:'Naveen'},
      {tag:'AI convert',   quote:'It may have altered in a positive sense my willingness for engaging with AI.',      name:'Mathew C.'},
      {tag:'Insightful',   quote:'You’ve asked me intelligent questions based on my answers.',                   name:'Julie'},
      {tag:'Insightful',   quote:'An AI agent that seemed to listen and hear what was said.',                         name:'Andrew G.'},
      {tag:'Easy',         quote:'I felt more comfortable talking to you than an actual person.',                     name:'Laiba'},
      {tag:'Easy',         quote:'Not as daunting as I was expecting.',                                               name:'Andy'},
      {tag:'Impressive',   quote:'Ten over ten, a brilliant experience for me.',                                      name:'Timilehin'},
      {tag:'Impressive',   quote:'Very, very impressive experience.',                                                 name:'Rod'},
      {tag:'Impressive',   quote:'A really fantastic way to do an interview.',                                        name:'James F.'},
      {tag:'Feels human',  quote:'Surprisingly authentic.',                                                           name:'David'},
    ],
  },
  finalCta: {
    title: 'Start a conversation with Kit.',
    sub: '10 minutes. No agenda other than you.',
    button: 'Speak to Kit',
  },
};
