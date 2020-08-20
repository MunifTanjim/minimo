# Changelog

## [Unreleased]

- ...

## [2.9.0] - 2020-07-18

### Added

- Indonesian translation
- Ukrainian translation
- Arabic translation
- Support `.Site.Language.LanguageDirection`

### Fixed

- MathJax integration
- Issues #256, #260, #264, #285

## [2.8.0] - 2019-09-08

### Added

- RTL support
- Staticman comments reCAPTCHA support
- Shortcode: `katex`
- Mermaid.js support

### Changed

- Minimum Hugo version requirement: `v0.55`

### Fixed

- Deprecation warnings
- Problem related to Hugo canonifyurls for demo site
- Some styles for colors and layouts
- Issues #218, #219, #222, #223, #228, #229, #230, #234, #237

## [2.7.0] - 2019-05-01

### Added

- Spanish translation improvements
- KaTeX support
- Lastmod in entry footer (config option: `params.settings.showLastmod`)
- German translation improvements
- French translation improvements
- Isso comment system support
- Option to hide entry meta: `hideEntryMeta`
- Header widget area: `header`
- Breadcrumbs widget: `breadcrumbs`
- Vietnamese translation
- Task list styling

### Changed

- Removed forced capitalization (function: `title`)
- Tweak Staticman comment system

### Fixed

- Broken taxonomy term links (Issue #160)
- Search index generation scripts
- Checkbox & Radio input styling

## [2.6.0] - 2018-07-24

### Added

- French translation improvements
- "extra" placeholder partial for `head` and `footer`
- Italian translation

### Changed

- Minimum Hugo version requirement: `v0.45`

### Fixed

- "Search: Fuse.js" documentation

## [2.5.0] - 2018-07-06

### Added

- Add `.alternate` text param for cover image
- YouTube icon in Social Menu
- German translation improvements
- Utterances comment system support
- Search Support: Algolia, Fuse.js, Lunr.js

### Changed

- Refactor Widget Area

### Fixed

- Issue #150

## [2.4.0] - 2018-05-30

### Added

- Chinese translation improvements
- Support for any widgets in Footer widget area
- Nested items support in Sidebar Menu

### Fixed

- Staticman comments `comments_depth` count

## [2.3.0] - 2018-05-09

### Added

- Staticman comment system support
- Catalan translation
- Spanish translation improvements
- Sidebar Menu within `sidebar_menu` widget
- Option to hide Main Menu: `hideMainMenu`
- Footer widget area (supports only `social_menu` widget)

### Changed

- Improved & Simplified Sidebar
- Stylesheet tweaks

### Fixed

- homeURL for multilingual site in About widget
- Recent Posts widget's title config priority

### Removed

- `hideSocialMenu` config option

## [2.2.0] - 2018-03-28

### Added

- Spanish translation
- Customizable `accentColor`
- Series taxonomy support

### Changed

- Forms & Buttons stylesheets
- Minor changes to Main Menu
- Refactor Social Menu template
- Refactor Homepage & Sidebar templates

### Fixed

- Public path for script chunks
- Sidebar stylesheets bug

## [2.1.0] - 2018-02-27

### Added

- `archive` layout for `page` type
- Social Menu widget ( `social_menu` )
- Colorful emoji support
- MathJax support

### Changed

- Change, Fix & Refactor stylesheets
- Codes stylesheet enhancement
- Move Widget areas' configuration to `config.toml` ( `.Site.Params.widgets` )
- Refactor Widgets' configuration structure
- Update linkedin, google_scholar, gitlab SVG icons
- Social Menu converted to widget
- Update project dependencies ( `package.json` )
- Split scripts into multiple chunks

### Fixed

- relURL for logo in `about` widget
- Shuffle option for `taxonomy_cloud` widget

## [2.0.0] - 2018-02-08

### Added

- Sidebar support
- Widgets support ( About, Recent Posts, Taxonomy Cloud )

### Changed

- Major Refactor in Layouts & Templates
- Major Refactor in Stylesheets
- Rename `noTermCloudShuffle` config option to `taxonomyCloudShuffle`

### Removed

- `homepageSections` ( Functionality moved to Widgets )

## [1.6.0] - 2018-02-08

### Added

- GitLab icon in Social Menu
- Cover Image support on Homepage

### Fixed

- Rule for filtering `page` from `recent_posts`
- Incorrect url for `taxonomyTerms` when `.Site.BaseURL` contained subdirectory

## [1.5.0] - 2018-01-25

### Added

- Support adding content in taxonomyTerm page
- Shortcode: `convo`
- Persian translation
- Additional Homepage Sections support
- Allow Markdown in `[params.copyright]` config
- Google Scholar icon in Social Menu
- Chinese translation
- Croatian translation

### Changed

- Codes stylesheet enhancement
- Switch to System Fonts Stack

### Fixed

- Hyperlink example on Typography Documentation

## [1.4.0] - 2017-12-08

### Added

- German translation
- Telegram icon in Social Menu
- Option to change recent posts quantity: `recentPostsLength`

### Fixed

- Twitter card `twitter:image:alt` tag rendering error

### Removed

- Release blog posts from _exampleSite_

## [1.3.0] - 2017-11-09

### Added

- robots.txt template
- `hideEntryNavigation` for specific Sections
- `noTermCloudShuffle` setting
- Brazilian Portuguese translation improvements
- French translation

### Changed

- Minor Documentation change

### Fixed

- Issue with theme assets' urls when `baseURL` containes sub-directory

## [1.2.1] - 2017-10-12

### Changed

- Tweaks for Opengraph tags
- `.Params` keys consistence casing

## [1.2.0] - 2017-10-11

### Added

- Configurable list date format: `listDateFormat`
- Slovenian translation
- Twitter Cards support

### Changed

- Refactor: `layouts/_default/li.html`

### Fixed

- Polish translation plural forms

### Removed

- Duplicate RSS link tag (from head)

## [1.1.0] - 2017-10-05

### Added

- Cover Image support
- Polish translation
- Brazilian Portuguese translation
- Shortcode: `file`
- Social Menu icons order sorting support

### Fixed

- `defaultContentLanguage` order in `config.toml`

## 1.0.0 - 2017-09-30

- Initial stable release

[unreleased]: https://github.com/MunifTanjim/minimo/compare/v2.9.0...HEAD
[2.9.0]: https://github.com/MunifTanjim/minimo/compare/v2.8.0...v2.9.0
[2.8.0]: https://github.com/MunifTanjim/minimo/compare/v2.7.0...v2.8.0
[2.7.0]: https://github.com/MunifTanjim/minimo/compare/2.6.0...v2.7.0
[2.6.0]: https://github.com/MunifTanjim/minimo/compare/2.5.0...2.6.0
[2.5.0]: https://github.com/MunifTanjim/minimo/compare/2.4.0...2.5.0
[2.4.0]: https://github.com/MunifTanjim/minimo/compare/v2.3.0...2.4.0
[2.3.0]: https://github.com/MunifTanjim/minimo/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/MunifTanjim/minimo/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/MunifTanjim/minimo/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/MunifTanjim/minimo/compare/v1.6.0...v2.0.0
[1.6.0]: https://github.com/MunifTanjim/minimo/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/MunifTanjim/minimo/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/MunifTanjim/minimo/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/MunifTanjim/minimo/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/MunifTanjim/minimo/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/MunifTanjim/minimo/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/MunifTanjim/minimo/compare/v1.0.0...v1.1.0
