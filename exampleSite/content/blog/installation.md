+++
date = "2017-05-17T12:00:00+06:00"
title = "Installation"
categories = ["Tutorial"]
tags = ["install", "how to"]

[menu.main]
  name = "Install"
  identifier = "install"
  weight = -120
+++
## Create a Hugo site

If you haven't created a Hugo site yet, use the following command:

    hugo new site <name>

Replace the `<name>` with whatever you want to name your site's repository. Alright, now enter the site's root folder:

    cd <name>

Okay, now it's time for installing Minimo!

## Installing Minimo

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

-------------

Voilà! Minimo is ready to run!
