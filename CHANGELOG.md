# Changelog

## [Unreleased]

- ...

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

[Unreleased]: https://github.com/MunifTanjim/minimo/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/MunifTanjim/minimo/compare/v1.6.0...v2.0.0
[1.6.0]: https://github.com/MunifTanjim/minimo/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/MunifTanjim/minimo/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/MunifTanjim/minimo/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/MunifTanjim/minimo/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/MunifTanjim/minimo/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/MunifTanjim/minimo/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/MunifTanjim/minimo/compare/v1.0.0...v1.1.0
