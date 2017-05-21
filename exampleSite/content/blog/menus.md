+++
date = "2017-05-20T12:00:00+06:00"
title = "Menus"
categories = ["Features"]
tags = ["feature", "menu"]
+++
Minimo has two menus.

1. Main Menu
2. Social Menu

### Main Menu

Main menu is located at the top of the site.

For adding content entries to the Main menu simply add the `menu` variable in it's [Front Matter](https://gohugo.io/content/front-matter/).

For TOML format:

    +++
    menu = "main"
    +++
    
For YAML format:

    ---
    menu: main
    ---

For JSON format:

    {
      "menu": "main"
    }

For adding non-content entries, you will have to specify it in the site's config file. For example:

    [[menu.main]]
      name = "Hugo"
      weight = -70
      identifier = "gohugo"
      url = "https://gohugo.io"


### Social Menu

Social menu is located at the footer of the site.

Use the `[author.social]` variables in the site's configuration for adding your social profiles.

You only have to add your usernames. Minimo will take care of the rest.
