**Bugs and issues to fix (freelance/stackoverflow/discord/telegram/google/wait)**

- [x]  1.This bug with hover effect not let me in peace (hover effect in register button and get price button are different)
Fixed:
Use <button> tag or this styles
	a:hover {
text-decoration: none;
color:@text-white;
}
- [x]  2.When I inspect page main background image changes in height
Fixed using pb5p

- [x]  3.When width <766px I want to don't upload main img (second site)
```html
<picture>
<source media="(min-width: 766px)" srcset="img/main/logo.png">
<img src="logo.jpg" alt="logo">
</picture>
```

- [ ]  4.When issue 3 fixed I want to make normal site view at the small screens (cause not it looks like https://prnt.sc/7F-Uqh76KVYC)
(I deleted Koala on low disk C free space reasons)

- [ ]  5.I want to do .prices as in online shop and with fixed image size
- [x]  6.How I can remove this gap https://prnt.sc/sGQ1Oif01J_4 (solwed: https://prnt.sc/wHjWkjrYnLIH)
- [ ]  7.How color all images as here and last with linear gradient <https://prnt.sc/1Ayiud0m5OCW>
- [ ]  8.Make feedback as in Figma (change arrow button and make opacity background - try pointer-events:none)
- [ ]  9.prices fix bug with ul margin bottom and when a lot of li adding
- [ ]  10.Fix bug when I try to minimize all_inclusive section
- [ ]  11.Adaptive this site for md sm and xs devices
- [ ]  12.Add pop-ups for buttons
- [ ]  13.Fix bug with button hover
- [ ]  14.Make svg sprites
