---
title: OneButton
tags: project
thumbnail: thumb2.png
date: 2019-05-01
color: 4
---
*The OneButton is a hardware prototype developed at the Future Center Europe for human–machine interaction with autonomous vehicles.*

<span class="more"></span>

{% image, "image2.jpeg", "Prototype of the OneButton", null, "image" %}

The vision behind the OneButton prototype is “mobility at the push of a button.” The device is no larger than a standard key and provides multiple functions:

* Requesting an autonomous vehicle to the user’s location
* Displaying service availability and estimated arrival time
* Assisting in localization and vehicle identification as it approaches
* Acting as a secure authentication token within the mobility system

{% image "image1.jpeg", "Rendering of the OneButton", null, "image" %}

The OneButton was part of the Sedric autonomous mobility study, also developed at the Future Center Europe.

{% image "sedric.jpeg", "Rendering of the OneButton", null, "image" %}

### Technical Details

Core hardware: ESP32 SoC, chosen for its integrated Wi-Fi/Bluetooth connectivity, low power consumption, and flexible development ecosystem

Connectivity: Bluetooth LE communication with a companion mobile application

Firmware: Implemented for power-efficient operation, handling button interactions, LED feedback, and secure communication

Mobile app: Developed as a bridge between the OneButton and backend mobility services, supporting authentication, vehicle tracking, and user notifications

My role included concept design, hardware component evaluation and selection, firmware development on the ESP32, and implementation of the companion mobile application.

*The OneButton was developed at the Future Center Europe.*