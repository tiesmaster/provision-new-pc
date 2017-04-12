---
layout: page
title: About
permalink: /about/
---

This is collection of some simple install instructions when setting up a devbox with the
tooling I use often, and configuration options I like the best. This is not intended to
be valuable to other people, but feel free to take what you like.

This is also intentionally non-automated (think Chef, Puppet, or DSC), since it takes a
lot of effort to automate these kind of things (including all kind of configuration options),
and get out of date really fast. Updating those kind of scripts cost a lot of time, which
you generally don't have when setting up a devbox. Updating docs is on the other hand
really easy!

Finally, I've moved away from using Chocolatey to provision a new devbox, since it has
a number of downsides. For one, it installs certain tools with a console stub, which
is really annoying, secondly, a lot of apps have auto-update mechanisms, and I never
know what to do with those notifications (do I update it through the app, and mess up
Chocolatey's state, or do I need to go to Chocolatey prompt and get it updated
somehow...).