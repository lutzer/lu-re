---
title: Planetary Sequencer
tags: project
thumbnail: interface.png
date: 2020-03-01
color: 5
---
*A circular sequencer inspired by gravitational fields and planetary movements. It allows to run several sequences simultanously in different orbits which allow for different time divisions and polyrythmic patterns.*

<span class="more"></span>

<div class="video">
  <video autoplay loop>
    <source src="{% asset, 'sequencer.mp4', 'videos' %}" type="video/mp4">
  </video>
</div>

To create a pattern, click on the center circle to enter the edit mode. Click on one of the orbits to add, remove or edit notes. Currently each orbit spins in a pre defined time devision. The demo uses Webmidi and will send notes to all connected midi devices. For using it with Ableton, the IAC Driver needs to be enabled. [Try out the demo](https://lutzer.github.io/planetary_sequencer/v2/)

<div class="gallery">
{% image, "interface.png", "Interface of the sequencer", null, "image" %}
{% image "image1.png", "Visualisation of running sequencer", null, "image" %}
{% image "image3.png", "Visualisation of running sequencer", null, "image" %}
</div>

*This project is currently beeing developed and is work in progress.*