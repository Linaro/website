//     // When the DOM is ready
//     $(function () {
//         // Init ScrollMagic Controller
//         var scrollMagicController = new ScrollMagic();
//         // TextTimeline 
//         var timeline = new TimelineMax();
//         // Text Vars
//         var linux_heading = $(".linux-heading"),
//             arm_heading = $(".arm-heading"),
//             os_heading = $(".os-heading"),
//             disappear_text = $(".disappear-text"),
//             formed_text = $(".formed-text"),
//             linaro_logo = $("#animated_logo");
//         // Animate equal sign and fade out
//         timeline.to('.highlighted-characters', 0.1, {
//             css: { color: "#9c3" }
//         })
//             .to(arm_heading, 0.1, { ease: Power2.easeInOut, css: { className: '+=lower' } })
//             .to(os_heading, 0.1, { ease: Power2.easeInOut, css: { className: '+=lower' } })
//             .delay(1)
//             .to(disappear_text, 0.5, { autoAlpha: 0, ease: Linear.easeOut })
//             .to(linux_heading, 1, { left: "100%", autoAplha: 1, transformOrigin: "middle left", ease: Power2.easeInOut, css: { className: '+=linux-heading-translated' } }, '1')
//             .to(os_heading, 1, { right: "100%", autoAplha: 1, transformOrigin: "bottom left", ease: Power2.easeInOut, css: { className: '+=os-heading-translated' } }, '1')
//             .delay(0.1)
//             .to(formed_text, 0.1, { autoAlpha: 0, scale: 2, ease: Power2.easeInOut }, '+=1')
//             .to(linaro_logo, 0.5, { autoAlpha: 1, scale: 2, ease: Bounce.easeOut })
//             .to('.sprinkle-block.cls-7', 0.7, { autoAlpha: 0.7, x: 0, scale: 1, ease: Bounce.easeOut })
//             .to('.sprinkle-block.cls-8', 0.5, { autoAlpha: 0.7, x: 0, scale: 1, ease: Bounce.easeOut })
//             .to('.sprinkle-block.cls-5', 0.4, { autoAlpha: 0.7, x: 0, scale: 1, ease: Bounce.easeOut }, '-=0.5')
//             .to('.sprinkle-block.cls-4', 0.4, { autoAlpha: 1, x: 0, scale: 1, ease: Bounce.easeOut }, '-=0.2')
//             .to('.sprinkle-block.cls-6', 0.2, { autoAlpha: 1, x: 0, scale: 1, ease: Bounce.easeOut }, '-=0.2');
//         // Linux, Arm and Open Source Scene
//         var linaroFormationScene = new ScrollScene({
//             triggerElement: '#text-highlight-scene',
//             offset: 30 /* offset the trigger 150px below #scene's top */
//         })
//         .setTween(timeline)
//         .addTo(scrollMagicController)
//         .addIndicators();
// });