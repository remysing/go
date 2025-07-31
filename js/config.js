const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'Duckduckgo',
      key: '*',
      url: 'https://duckduckgo.com',
      search: '/?q={}'
    },
    {
      category: 'General',
      name: 'Tweet',
      key: 't',
      url: 'https://remy.coffee',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'w3',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Blog',
      key: 'b',
      url: 'https://blog.remy.coffee/remy',
      search: '/blog/search?q={}',
      color: 'linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)',
      icon: 'w3',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Bookmark',
      key: 'bo',
      url: 'https://save.remy.coffee/login',
      color: '#5682a3',
      icon: 'w3',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Private',
      key: 'p',
      url: 'https://blog.remy.coffee/show/',
      color: '#5682a3',
      icon: 'w3',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Media',
      key: 'm',
      url: 'https://flow.remy.coffee',
      color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
      icon: 'w3',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Files',
      key: 'f',
      url: 'https://snap.remy.coffee',
      color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
      icon: 'w3',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'TWR',
      key: 't',
      url: 'https://blog.remy.coffee/twr',
      color: '#7289da',
      icon: 'w3',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'WriteAs',
      key: 'w',
      url: 'https://trainwithramnik.writeas.com',
      color: '#7289da',
      icon: 'w3',
      quickLaunch: false,
    },


    {
      category: 'Programming',
      name: 'GitHub',
      key: 'g',
      url: 'https://github.com/login',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'github',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'PikaPod',
      key: 'p',
      url: 'https://www.pikapods.com/login',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #53341C, #F48024)',
      icon: 'keep',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'NorthFlank',
      key: 'n',
      url: 'https://app.northflank.com/login',
      search: '/search?stories[query]={}',
      color: 'linear-gradient(135deg, #FF6600, #DC5901)',
      icon: 'keep',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'Netlify',
      key: 'ne',
      url: 'https://app.netlify.com/login',
      search: '/search?stories[query]={}',
      color: 'linear-gradient(135deg, #FF6600, #DC5901)',
      icon: 'keep',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'Hostinger',
      key: 'h',
      url: 'https://auth.hostinger.com/login',
      search: '/search?q={}',
      color: '#212121',
      icon: 'keep',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'SlipLane',
      key: 's',
      url: 'https://sliplane.io/auth/login',
      search: '/search?q={}',
      color: '#212121',
      icon: 'keep',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'Instapaper',
      key: 'I',
      url: 'https://www.instapaper.com/u',
      color: 'linear-gradient(135deg, #33373A, #484949)',
      icon: 'keep',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'Remys Admin',
      key: 'R',
      url: 'https://blog.remy.coffee/login',
      color: 'linear-gradient(135deg, #33373A, #484949)',
      icon: 'keep',
      quickLaunch: true,
    },


    {
      category: 'Connect',
      name: 'Proton',
      key: 'p',
      url: 'https://mail.proton.me',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'mail',
      quickLaunch: false,
    },
    {
      category: 'Connect',
      name: 'Reddit',
      key: 'r',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: false,
    },
    {
      category: 'Connect',
      name: 'DuckDuckGo',
      key: 'd',
      url: 'https://duckduckgo.com',
      color: 'linear-gradient(135deg, #E50914, #CB020C)',
      icon: 'netflix',
      quickLaunch: false,
    },
    {
      category: 'Connect',
      name: 'Booky',
      key: 's',
      url: 'https://booky.io',
      search: '/search/{}',
      color: '#1dd35e',
      icon: 'spotify',
      quickLaunch: false,
    },
    {
      category: 'Connect',
      name: 'Pydio',
      key: 'p',
      url: 'https://stuff.remy.coffee',
      search: '/directory/game/{}',
      color: 'linear-gradient(135deg, #6441a5, #4b367c)',
      icon: 'twitch',
      quickLaunch: false,
    },


    {
      category: 'Other',
      name: 'Twitter',
      key: 't',
      url: 'https://www.twitter.com',
      search: '/search?q={}&src=typed_query',
      color: 'linear-gradient(135deg, #1DA1F2, #19608F)',
      icon: 'twitter',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Instagram',
      key: 'i',
      url: 'https://www.instagram.com',
      color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
      icon: 'instagram',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'LinkedIn',
      key: 'l',
      url: 'https://linkedin.com',
      search: '/search/results/all/?keywords={}',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'linkedin',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Notion',
      key: 'ns',
      url: 'https://www.notion.so',
      color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
      icon: 'notion',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Translate',
      key: 'tr',
      url: 'https://translate.google.com/',
      search: '/#view=home&op=translate&sl=auto&tl=en&text={}',
      color: '#1a73e8',
      icon: 'translate',
      quickLaunch: false,
    },
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
