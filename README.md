# Minimo

A minimalist theme for Hugo.

## Installation

There are two different ways you can install Minimo:

1. As clone
2. As submodule

The second method is suggested.

#### Install Minimo as clone

With this method, you will simply clone it. And a copy of Minimo's repository will be stored with the rest of you site. Enter the following command for cloning Minimo:

    git clone https://github.com/MunifTanjim/minimo themes/minimo

#### Install Minimo as submodule

This method doesn't store a copy of Minimo's repository inside your site's repository. Rather it adds Minimo as a dependency. Start by this command:

    git submodule add https://github.com/MunifTanjim/minimo themes/minimo

This will add Minimo's repository as a submodule to your site's repository. Now, you will have to pull the theme:

    git submodule init
    git submodule update

That's all, Minimo is ready to be used.

## Configuration

For getting started with Minimo, copy the `config.toml` file from the `exampleSite` directory inside Minimo's repository to your site repository:

    cp themes/minimo/exampleSite/config.toml .

Now, you can start editing this file and add your own information!

## Development
If you find a bug or want to request a new feature, feel free to open an issue.

## License
Minimo is licensed under the MIT License. Check the [LICENSE](https://github.com/MunifTanjim/minimo/blob/master/LICENSE) file for details.

The following resources are included/used in the theme:

- [Feather](https://feather.netlify.com/) by Cole Bemis - Licensed under the [MIT License](https://github.com/colebemis/feather/blob/master/LICENSE).
