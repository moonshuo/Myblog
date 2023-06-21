---
title: Hexo中Buttefly主题功能增强（九）
categories:
  - 博客搭建
tags:
  - Hexo
  - Butterfly
cover: 'https://moonshuo.cn/cover/10.jpg'
abbrlink: 50269
date: 2022-12-01
swiper_index: 92
---

 原文链接，阅读效果更佳：[Hexo中Buttefly主题功能增强（九） | 偷掉月亮 (moonshuo.cn)](https://moonshuo.cn/posts/50269.html)

大家好，我是阿硕，专注与后端，略懂前端的一个菜鸟程序猿，今天将为大家讲述Butterfly主题的一些功能增强，今天讲述的是添加日历的操作，大家有什么疑问可以去原文进行提问，有邮件通知，博主可以更快回复！！

# 添加日历

## 效果

![image-20221114163859894](https://moonshuo.cn//images/202211141639086.png)

## 添加pug

在下面的路径中新建文件card_calendar.pug，并复制下面的代码,<font color='red'>而里面的文章写作日历，可以更改为自己喜欢的名字</font>

...\themes\butterfly\layout\includes\widget\card_calendar.pug

```css
if theme.aside.card_calendar.enable
  .card-widget.card-calendar
    .card-content
      .item-headline
        i.fas.fa-calendar
        span= _p('文章写作日历')
      div#calendar.widget
```

index引入，在同级的目录下，打开index.pug，引入下面的代码，位置参考下图，而可以上下变换位置，改变这个日志与其他的模块的前后位置，<font color='red'>注意第一个是在文章页进行显示，而第二个在首页显示，大家根据喜好进行删减即可</font>

```css
!=partial('includes/widget/card_calendar', {}, {cache: true})
```

![image-20221114164333583](https://moonshuo.cn//images/202211141643613.png)

## 文件配置

在<font color='red'>主题文件中aside</font>侧边栏中，添加下面的代码，注意格式，和其他的卡片要相同

```css
card_calendar:
    enable: true
```

## Js文件建立

在..\themes\butterfly\source\js\路径中新建文件languages.js，复制以下的代码，这仅仅是一个语言转换代码

```js
var calLanguages = {
    ar: { // Arabic
      months: [
        'كانون الثاني', 'شباط', 'آذار', 'نيسان', 'مايو', 'حزيران', 'تموز', 'آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول'
      ],
      dayOfWeekShort: [
        'ن', 'ث', 'ع', 'خ', 'ج', 'س', 'ح'
      ],
      dayOfWeek: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد']
    },
    ro: { // Romanian
      months: [
        'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'
      ],
      dayOfWeekShort: [
        'Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'
      ],
      dayOfWeek: ['Duminică', 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă']
    },
    id: { // Indonesian
      months: [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ],
      dayOfWeekShort: [
        'Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'
      ],
      dayOfWeek: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    },
    is: { // Icelandic
      months: [
        'Janúar', 'Febrúar', 'Mars', 'Apríl', 'Maí', 'Júní', 'Júlí', 'Ágúst', 'September', 'Október', 'Nóvember', 'Desember'
      ],
      dayOfWeekShort: [
        'Sun', 'Mán', 'Þrið', 'Mið', 'Fim', 'Fös', 'Lau'
      ],
      dayOfWeek: ['Sunnudagur', 'Mánudagur', 'Þriðjudagur', 'Miðvikudagur', 'Fimmtudagur', 'Föstudagur', 'Laugardagur']
    },
    bg: { // Bulgarian
      months: [
        'Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'
      ],
      dayOfWeekShort: [
        'Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
      ],
      dayOfWeek: ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота']
    },
    fa: { // Persian/Farsi
      months: [
        'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
      ],
      dayOfWeekShort: [
        'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'
      ],
      dayOfWeek: ['یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه', 'یک‌شنبه']
    },
    ru: { // Russian
      months: [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ],
      dayOfWeekShort: [
        'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
      ],
      dayOfWeek: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    },
    uk: { // Ukrainian
      months: [
        'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
      ],
      dayOfWeekShort: [
        'Ндл', 'Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт'
      ],
      dayOfWeek: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота']
    },
    en: { // English
      months: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ],
      dayOfWeekShort: [
        'S', 'M', 'T', 'W', 'T', 'F', 'S'
      ],
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      postsMonthTip: 'Posts published in LMM yyyy',
      titleFormat: 'LMM yyyy'
    },
    el: { // Ελληνικά
      months: [
        'Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'
      ],
      dayOfWeekShort: [
        'Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'
      ],
      dayOfWeek: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
    },
    de: { // German
      months: [
        'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
      ],
      dayOfWeekShort: [
        'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'
      ],
      dayOfWeek: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
    },
    nl: { // Dutch
      months: [
        'januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'
      ],
      dayOfWeekShort: [
        'zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'
      ],
      dayOfWeek: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
    },
    tr: { // Turkish
      months: [
        'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
      ],
      dayOfWeekShort: [
        'Paz', 'Pts', 'Sal', 'Çar', 'Per', 'Cum', 'Cts'
      ],
      dayOfWeek: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
    },
    fr: { //French
      months: [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ],
      dayOfWeekShort: [
        'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'
      ],
      dayOfWeek: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
    },
    es: { // Spanish
      months: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      dayOfWeekShort: [
        'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'
      ],
      dayOfWeek: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    },
    th: { // Thai
      months: [
        'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
      ],
      dayOfWeekShort: [
        'อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'
      ],
      dayOfWeek: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์', 'อาทิตย์']
    },
    pl: { // Polish
      months: [
        'styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'
      ],
      dayOfWeekShort: [
        'nd', 'pn', 'wt', 'śr', 'cz', 'pt', 'sb'
      ],
      dayOfWeek: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']
    },
    pt: { // Portuguese
      months: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ],
      dayOfWeekShort: [
        'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
      ],
      dayOfWeek: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    },
    ch: { // Simplified Chinese
      months: [
        '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
      ],
      dayOfWeekShort: [
        '日', '一', '二', '三', '四', '五', '六'
      ]
    },
    se: { // Swedish
      months: [
        'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'
      ]
    },
    kr: { // Korean
      months: [
        '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'
      ],
      dayOfWeekShort: [
        '일', '월', '화', '수', '목', '금', '토'
      ],
      dayOfWeek: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    },
    it: { // Italian
      months: [
        'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
      ],
      dayOfWeekShort: [
        'Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'
      ],
      dayOfWeek: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']
    },
    da: { // Dansk
      months: [
        'January', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'July', 'August', 'September', 'Oktober', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'
      ],
      dayOfWeek: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']
    },
    no: { // Norwegian
      months: [
        'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'
      ],
      dayOfWeekShort: [
        'Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'
      ],
      dayOfWeek: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
    },
    ja: { // Japanese
      months: [
        '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'
      ],
      dayOfWeekShort: [
        '日', '月', '火', '水', '木', '金', '土'
      ],
      dayOfWeek: ['日曜', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜']
    },
    vi: { // Vietnamese
      months: [
        'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
      ],
      dayOfWeekShort: [
        'CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'
      ],
      dayOfWeek: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy']
    },
    sl: { // Slovenščina
      months: [
        'Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Ned', 'Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob'
      ],
      dayOfWeek: ['Nedelja', 'Ponedeljek', 'Torek', 'Sreda', 'Četrtek', 'Petek', 'Sobota']
    },
    cs: { // Čeština
      months: [
        'Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'
      ],
      dayOfWeekShort: [
        'Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'
      ]
    },
    hu: { // Hungarian
      months: [
        'Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Va', 'Hé', 'Ke', 'Sze', 'Cs', 'Pé', 'Szo'
      ],
      dayOfWeek: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat']
    },
    az: { //Azerbaijanian (Azeri)
      months: [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
      ],
      dayOfWeekShort: [
        'B', 'Be', 'Ça', 'Ç', 'Ca', 'C', 'Ş'
      ],
      dayOfWeek: ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə']
    },
    bs: { //Bosanski
      months: [
        'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
      ],
      dayOfWeekShort: [
        'Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'
      ],
      dayOfWeek: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota']
    },
    ca: { //Català
      months: [
        'Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'
      ],
      dayOfWeekShort: [
        'Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'
      ],
      dayOfWeek: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte']
    },
    'en-GB': { //English (British)
      months: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
      ],
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    et: { //'Eesti'
      months: [
        'Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'
      ],
      dayOfWeekShort: [
        'P', 'E', 'T', 'K', 'N', 'R', 'L'
      ],
      dayOfWeek: ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev']
    },
    eu: { //Euskara
      months: [
        'Urtarrila', 'Otsaila', 'Martxoa', 'Apirila', 'Maiatza', 'Ekaina', 'Uztaila', 'Abuztua', 'Iraila', 'Urria', 'Azaroa', 'Abendua'
      ],
      dayOfWeekShort: [
        'Ig.', 'Al.', 'Ar.', 'Az.', 'Og.', 'Or.', 'La.'
      ],
      dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata']
    },
    fi: { //Finnish (Suomi)
      months: [
        'Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'
      ],
      dayOfWeekShort: [
        'Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'
      ],
      dayOfWeek: ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai']
    },
    gl: { //Galego
      months: [
        'Xan', 'Feb', 'Maz', 'Abr', 'Mai', 'Xun', 'Xul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'
      ],
      dayOfWeekShort: [
        'Dom', 'Lun', 'Mar', 'Mer', 'Xov', 'Ven', 'Sab'
      ],
      dayOfWeek: ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado']
    },
    hr: { //Hrvatski
      months: [
        'Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'
      ],
      dayOfWeekShort: [
        'Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'
      ],
      dayOfWeek: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subotagg']
    },
    ko: { //Korean (한국어)
      months: [
        '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'
      ],
      dayOfWeekShort: [
        '일', '월', '화', '수', '목', '금', '토'
      ],
      dayOfWeek: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    },
    lt: { //Lithuanian (lietuvių)
      months: [
        'Sausio', 'Vasario', 'Kovo', 'Balandžio', 'Gegužės', 'Birželio', 'Liepos', 'Rugpjūčio', 'Rugsėjo', 'Spalio', 'Lapkričio', 'Gruodžio'
      ],
      dayOfWeekShort: [
        'Sek', 'Pir', 'Ant', 'Tre', 'Ket', 'Pen', 'Šeš'
      ],
      dayOfWeek: ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis']
    },
    lv: { //Latvian (Latviešu)
      months: [
        'Janvāris', 'Februāris', 'Marts', 'Aprīlis ', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'
      ],
      dayOfWeekShort: [
        'Sv', 'Pr', 'Ot', 'Tr', 'Ct', 'Pk', 'St'
      ],
      dayOfWeek: ['Svētdiena', 'Pirmdiena', 'Otrdiena', 'Trešdiena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena']
    },
    mk: { //Macedonian (Македонски)
      months: [
        'јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември'
      ],
      dayOfWeekShort: [
        'нед', 'пон', 'вто', 'сре', 'чет', 'пет', 'саб'
      ],
      dayOfWeek: ['Недела', 'Понеделник', 'Вторник', 'Среда', 'Четврток', 'Петок', 'Сабота']
    },
    mn: { //Mongolian (Монгол)
      months: [
        '1-р сар', '2-р сар', '3-р сар', '4-р сар', '5-р сар', '6-р сар', '7-р сар', '8-р сар', '9-р сар', '10-р сар', '11-р сар', '12-р сар'
      ],
      dayOfWeekShort: [
        'Дав', 'Мяг', 'Лха', 'Пүр', 'Бсн', 'Бям', 'Ням'
      ],
      dayOfWeek: ['Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба', 'Ням']
    },
    'pt-BR': { //Português(Brasil)
      months: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ],
      dayOfWeekShort: [
        'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'
      ],
      dayOfWeek: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    },
    sk: { //Slovenčina
      months: [
        'Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'
      ],
      dayOfWeek: ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota']
    },
    sq: { //Albanian (Shqip)
      months: [
        'Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'
      ],
      dayOfWeekShort: [
        'Die', 'Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Shtu'
      ],
      dayOfWeek: ['E Diel', 'E Hënë', 'E Martē', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtunë']
    },
    'sr-YU': { //Serbian (Srpski)
      months: [
        'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
      ],
      dayOfWeekShort: [
        'Ned', 'Pon', 'Uto', 'Sre', 'čet', 'Pet', 'Sub'
      ],
      dayOfWeek: ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota']
    },
    sr: { //Serbian Cyrillic (Српски)
      months: [
        'јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'
      ],
      dayOfWeekShort: [
        'нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'
      ],
      dayOfWeek: ['Недеља', 'Понедељак', 'Уторак', 'Среда', 'Четвртак', 'Петак', 'Субота']
    },
    sv: { //Svenska
      months: [
        'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'
      ],
      dayOfWeek: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag']
    },
    'zh-TW': { //Traditional Chinese (繁體中文)
      months: [
        '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
      ],
      dayOfWeekShort: [
        '日', '一', '二', '三', '四', '五', '六'
      ],
      dayOfWeek: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    },
    'zh-CN': { //Simplified Chinese (简体中文)
      months: [
        '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
      ],
      dayOfWeekShort: [
        '日', '一', '二', '三', '四', '五', '六'
      ],
      dayOfWeek: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      postsMonthTip: '查看yyyy年MM月的文章',
      titleFormat: 'yyyy年MM月'
    },
    he: { //Hebrew (עברית)
      months: [
        'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
      ],
      dayOfWeekShort: [
        'א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'
      ],
      dayOfWeek: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון']
    },
    hy: { // Armenian
      months: [
        'Հունվար', 'Փետրվար', 'Մարտ', 'Ապրիլ', 'Մայիս', 'Հունիս', 'Հուլիս', 'Օգոստոս', 'Սեպտեմբեր', 'Հոկտեմբեր', 'Նոյեմբեր', 'Դեկտեմբեր'
      ],
      dayOfWeekShort: [
        'Կի', 'Երկ', 'Երք', 'Չոր', 'Հնգ', 'Ուրբ', 'Շբթ'
      ],
      dayOfWeek: ['Կիրակի', 'Երկուշաբթի', 'Երեքշաբթի', 'Չորեքշաբթի', 'Հինգշաբթի', 'Ուրբաթ', 'Շաբաթ']
    },
    kg: { // Kyrgyz
      months: [
        'Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'
      ],
      dayOfWeekShort: [
        'Жек', 'Дүй', 'Шей', 'Шар', 'Бей', 'Жум', 'Ише'
      ],
      dayOfWeek: [
        'Жекшемб', 'Дүйшөмб', 'Шейшемб', 'Шаршемб', 'Бейшемби', 'Жума', 'Ишенб'
      ]
    },
    rm: { // Romansh
      months: [
        'Schaner', 'Favrer', 'Mars', 'Avrigl', 'Matg', 'Zercladur', 'Fanadur', 'Avust', 'Settember', 'October', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Du', 'Gli', 'Ma', 'Me', 'Gie', 'Ve', 'So'
      ],
      dayOfWeek: [
        'Dumengia', 'Glindesdi', 'Mardi', 'Mesemna', 'Gievgia', 'Venderdi', 'Sonda'
      ]
    },
    ka: { // Georgian
      months: [
        'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'
      ],
      dayOfWeekShort: [
        'კვ', 'ორშ', 'სამშ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ'
      ],
      dayOfWeek: ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი']
    },
  };

```

同样建立calendar.js文件

```js
/**
 * Calendar - displays a calendar of the current month. Dates appear links if there are posts for that day.
 */
 (function($) {
    var aCalendar = function(language, options, object) {
      var now = new Date();
      var nDay = now.getDate();
      var nMonth = now.getMonth();
      var nYear = now.getFullYear();
      var dDay = nDay;
      var dMonth = nMonth;
      var dYear = nYear;
      var instance = object;
      var allPosts = null;
      var months = null;
      /* Current month's posts */
      var current = {
        posts: [],
        prev: null,
        next: null
      };
      var currentLanguage = 'en';
  
      initLanguage(language);
  
      var settings = $.extend({}, $.fn.aCalendar.defaults, typeof calLanguages === 'undefined' ? {} : calLanguages[currentLanguage], options);
  
      if (settings.root[0] !== '/') {
        settings.root = '/' + settings.root;
      }
  
      if (settings.root[settings.root.length - 1] !== '/') {
        settings.root += '/';
      }
  
      /**
       * Initial language.
       */
      function initLanguage(key) {
        if (key && typeof calLanguages !== 'undefined' && calLanguages[key]) {
          currentLanguage = key;
        }
      }
  
      /**
       * Click handler for next month arrow button.
       */
      function nextMonth() {
        if (dMonth < 11) {
          dMonth++;
        } else {
          dMonth = 0;
          dYear++;
        }
  
        draw();
      };
  
      /**
       * Click handler for previous month arrow button.
       */
      function previousMonth() {
        if (dMonth > 0) {
          dMonth--;
        } else {
          dMonth = 11;
          dYear--;
        }
  
        draw();
      };
  
      /**
       * Click handler for navigating to a month if there are posts.
       */
      function toPostsMonth(date) {
        if (date) {
          dYear = date.getFullYear();
          dMonth = date.getMonth();
          draw();
        }
      }
  
      /**
       * Load current month's posts.
       */
      function loadPosts() {
        if (settings.single) {
          loadAllPosts();
        } else {
          loadPostsByMonth();
        }
      }
  
      /**
       * Load all month's posts.
       */
      function loadAllPosts() {
        if (settings.url != null && settings.url != '') {
          if (allPosts === null) {
            $.ajax({
              url: settings.url,
              async: false,
              success: function(data) {
                allPosts = data;
                initMonths(Object.keys(allPosts));
              }
            });
          }
  
          if (allPosts !== null) {
            if (parse()) {
              current.posts = allPosts[dYear + '-' + (dMonth + 1)];
            }
          }
        }
      }
  
      /**
       * Load posts by the month.
       */
      function loadPostsByMonth() {
        if (months === null) {
          $.ajax({
            url: settings.root + 'list.json',
            async: false,
            success: function(data) {
              initMonths(data);
            }
          });
        }
  
        if (parse()) {
          $.ajax({
            url: settings.root + dYear + '-' + (dMonth + 1) + '.json',
            async: false,
            success: function(data) {
              current.posts = data;
            }
          });
        }
      }
  
      /**
       * Initial months array.
       */
      function initMonths(array) {
        months = array.map(function(item) {
          var ym = item.split('-');
          return new Date(Date.UTC(+ym[0], +ym[1] - 1));
        });
      }
  
      /**
       * Parse posts month array, and set current.next and current.prev.
       *
       * @return if there are posts in this month, return true. ortherwise return false.
       */
      function parse() {
        var time = Date.UTC(dYear, dMonth);
  
        if (months === null || months.length === 0) {
          return false;
        }
  
        //If no posts in the current month, and before (or after) the current month yet not published articles, then the response to click previous month's (or next month's) event don't need to parse months array
        if (current.posts.length === 0 && (current.prev === null && current.next !== null && current.next.getTime() > time || current.next === null && current.prev !== null && current.prev.getTime() < time)) {
          return false;
        }
  
        current.posts = [];
  
        for (var i = 0; i < months.length; i++) {
          var cTime = months[i].getTime();
          if (time === cTime) {
            current.prev = i === 0 ? null : months[i - 1];
            current.next = i === months.length - 1 ? null : months[i + 1];
            return true;
          } else if (time < cTime) {
            current.prev = i === 0 ? null : months[i - 1];
            current.next = months[i];
            break;
          } else {
            current.prev = months[i];
            current.next = null;
          }
        }
  
        return false;
      }
  
      /**
       * Format date object.
       */
      function simpleDateFormat(date, fmt) {
        var o = {
          'LMM+': settings.months[date.getMonth()],
          'MM+': date.getMonth() + 1
        };
  
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
  
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (k === 'LMM+') ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
          }
        }
  
        return fmt;
      }
  
      /**
       * Draw calendar.
       *
       */
      function draw() {
        loadPosts();
        var dWeekDayOfMonthStart = new Date(dYear, dMonth, 1).getDay() - settings.weekOffset;
        if (dWeekDayOfMonthStart <= 0) {
          dWeekDayOfMonthStart = 6 - ((dWeekDayOfMonthStart + 1) * -1);
        }
  
        var dLastDayOfMonth = new Date(dYear, dMonth + 1, 0).getDate();
        var dLastDayOfPreviousMonth = new Date(dYear, dMonth, 0).getDate() - dWeekDayOfMonthStart + 1;
  
        var cHead = $('<div/>').addClass('cal-head');
        var cNext = $('<div/>');
        var cPrevious = $('<div/>');
        var cTitle = $('<div/>').addClass('cal-title');
        cPrevious.html(settings.headArrows.previous);
        cNext.html(settings.headArrows.next);
        curDate = new Date(Date.UTC(dYear, dMonth));
        if (current.posts.length === 0) {
          cTitle.html(simpleDateFormat(curDate, settings.titleFormat));
        } else {
          cTitleLink = $('<a/>').attr('href', simpleDateFormat(curDate, settings.titleLinkFormat))
            .attr('title', simpleDateFormat(curDate, settings.postsMonthTip))
            .html(simpleDateFormat(curDate, settings.titleFormat));
          cTitle.html(cTitleLink);
        }
  
        cPrevious.on('click', previousMonth);
        cNext.on('click', nextMonth);
  
        cHead.append(cPrevious);
        cHead.append(cTitle);
        cHead.append(cNext);
  
        var cBody = $('<table/>').addClass('cal');
  
        var dayOfWeek = settings.weekOffset;
        var cWeekHead = $('<thead/>');
        var cWeekHeadRow = $('<tr/>');
        for (var i = 0; i < 7; i++) {
          if (dayOfWeek > 6) {
            dayOfWeek = 0;
          }
  
          var cWeekDay = $('<th/>').attr('scope', 'col').attr('title', settings.dayOfWeek[dayOfWeek]);
          cWeekDay.html(settings.dayOfWeekShort[dayOfWeek]);
          cWeekHeadRow.append(cWeekDay);
          dayOfWeek++;
        }
  
        cWeekHead.append(cWeekHeadRow);
        cBody.append(cWeekHead);
  
        var cFoot = $('<tfoot/>');
        var cFootRow = $('<tr/>');
        var cPrevPosts = $('<td/>').attr('colspan', 3);
        var cPad = $('<td/>').html(' ');
        var cNextPosts = $('<td/>').attr('colspan', 3);
        if (current.prev) {
          cPrevPosts.html(settings.footArrows.previous + settings.months[current.prev.getMonth()])
            .addClass('cal-foot')
            .attr('title', simpleDateFormat(current.prev, settings.postsMonthTip));
        }
  
        if (current.next) {
          cNextPosts.html(settings.months[current.next.getMonth()] + settings.footArrows.next)
            .addClass('cal-foot')
            .attr('title', simpleDateFormat(current.next, settings.postsMonthTip));
        }
  
        cPrevPosts.on('click', function() {
          toPostsMonth(current.prev);
        });
  
        cNextPosts.on('click', function() {
          toPostsMonth(current.next);
        });
  
        cFootRow.append(cPrevPosts);
        cFootRow.append(cPad);
        cFootRow.append(cNextPosts);
        cFoot.append(cFootRow);
  
        var cMainPad = $('<tbody/>');
        var day = 1;
        var dayOfNextMonth = 1;
        for (var i = 0; i < 6; i++) {
          var cWeek = $('<tr/>');
          for (var j = 0; j < 7; j++) {
            var cDay = $('<td/>');
            if (i * 7 + j < dWeekDayOfMonthStart) {
              cDay.addClass('cal-gray');
              cDay.html(dLastDayOfPreviousMonth++);
            } else if (day <= dLastDayOfMonth) {
              if (day == dDay && nMonth == dMonth && nYear == dYear) {
                cDay.addClass('cal-today');
              }
  
              var count = {
                num: 0,
                keys: []
              };
              for (var k = 0; k < current.posts.length; k++) {
                var d = new Date(Date.parse(current.posts[k].date));
                if (d.getDate() == day) {
                  count.keys[count.num++] = k;
                }
              }
  
              if (count.num !== 0) {
                var index = count.keys[0];
                var cLink = $('<a>').attr('href', current.posts[index].link).attr('title', current.posts[index].title).html(day++);
                cDay.append(cLink);
              } else {
                cDay.html(day++);
              }
            } else {
              cDay.addClass('cal-gray');
              cDay.html(dayOfNextMonth++);
            }
  
            cWeek.append(cDay);
          }
  
          cMainPad.append(cWeek);
        }
  
        cBody.append(cWeekHead);
        cBody.append(cFoot);
        cBody.append(cMainPad);
  
        $(instance).html(cHead);
        $(instance).append(cBody);
      }
  
      return draw();
    };
  
    $.fn.aCalendar = function(Lang, oInit) {
      return this.each(function() {
        return aCalendar(Lang, oInit, $(this));
      });
    };
  
    // plugin defaults
    $.fn.aCalendar.defaults = {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      dayOfWeekShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      postsMonthTip: 'Posts published in LMM yyyy',
      titleFormat: 'yyyy LMM',
      titleLinkFormat: '/archives/yyyy/MM/',
      headArrows: {previous: '<span class="cal-prev"></span>', next: '<span class="cal-next"></span>'},
      footArrows: {previous: '« ', next: ' »'},
      weekOffset: 0,
      single: true,
      root: '/calendar/',
      url: '/calendar.json'
    };
  
  }(jQuery));
  $(document).ready(function () {
    $("#calendar").aCalendar("zh-CN");
  });

```

## Style文件配置

添加themes\butterfly\source\css\_layout\calendar.styl文件，复制以下代码

```css
#calendar
  a
    text-decoration none

.cal-head
  position relative
  height 20px
  padding 8px 6px 2px 6px
  margin-bottom 15px

.cal-prev,.cal-next
  position absolute
  top 9px
  width 9px
  height 10px
  padding 3px 4px
  border 1px solid transparent
  color #333
  outline 0

.cal-prev
  left 8px
  &:before
    border-right 9px solid #333

.cal-next
  right 8px
  &:before
    border-left 9px solid #333

.cal-prev:before,.cal-next:before
  content ''
  display block
  width 0
  height 0
  border-top 5px solid transparent
  border-bottom 5px solid transparent

.cal-title
  width 120px
  margin 0 auto
  color #333
  font bold 14px/18px Arial
  text-align center
  a
    border 1px solid transparent
    color #f76b61

.cal,
.cal th,
.cal td
  border none

.cal
  border-collapse collapse
  border-spacing 0
  table-layout fixed
  width 100%
  margin 0
  th
    background #00000000
    color black
    font-weight 900 !important
  tbody
    a
      background-color #f76b61
      color white
      display block
      font-weight 700
      border 1px solid white
    .cal-today
      background-color #ffdfdd
      color #f76b61
  .cal-gray
    color #ddd

.cal th,
.cal td
  font-weight normal
  line-height 2.5625
  padding 0
  text-align center

.cal-title a:hover,
.cal-prev:hover,
.cal-next:hover,
.cal .cal-foot:hover,
.cal .cal-foot:focus
  cursor pointer
  background-color transparent
  cursor pointer
  color #42d3d8

.cal tbody a:hover,
.cal tbody a:focus
  background-color #ffdfdd
  color #fff
  cursor pointer
```

## 最终配置

执行以下命令

```css
npm install --save git://github.com/howiefh/hexo-generator-calendar.git
```

但是现在我们要与pjax相匹配，所以在引入的时候，我们选择这样进行操作

```yml
  #日历
     - <script data-pjax type="text/javascript" src="/js/languages.js"></script>
     - <script data-pjax type="text/javascript" src="/js/calendar.js" ></script>
```

在hexo主配置文件中添加下面的代码

```css
calendar:
  single: true
  root: calendar/
```

hexo clean --hexo g  -- hexo s查看效果

# 添加天气插件

<font color='red'>和风天气插件存在一些bug，博主尝试了下面的参考方案的三种方法，文章在加载的时候初始化会进行请求，如果定位比较慢的话，大部分都是北京，而不是我们访问者的位置</font>

而我最终采用了心知天气天气的插件，虽然没有和风天气好看，但是只要我不允许访问者展开，大家就不知道有多丑，下面博主给出两个做法，大家自己选择

天气插件博主参考了下面三个作者的做法，引用了，打算最终使用[Hexo在顶部增加天气小部件 | 花猪のBlog (cnhuazhu.top)](https://cnhuazhu.top/butterfly/2021/02/24/Hexo魔改/Hexo在顶部增加天气小部件/)，这位博主的做法，同时简化了代码的开发，第一位作者的做法比较简约美观，但是考虑到侧边栏的位置，于是舍弃了

## 和风天气

### 注册

打开下面的网站进行注册[注册 | 和风天气 (qweather.com)](https://id.qweather.com/#/register?redirect=https%3A%2F%2Fconsole.qweather.com)

而后我们打开下面的网站，注册简约插件，在这里我们可以选择配色

![image-20221115161857169](https://moonshuo.cn//images/202211151618237.png)

完成之后，我们生成代码

![image-20221115161948507](https://moonshuo.cn//images/202211151619554.png)

### 文件配置

在js文件夹下新建weather.js文件，<font color='red'>仅仅复制给出的代码的script标签的内容</font>，并在butterfly主题中引入改js文件

下面是我复制的代码，<font color='red'>注意，因为博主设置了透明，所以选择透明的背景，大家根据自己的进行挑选</font>

```js

WIDGET = {
    "CONFIG": {
      "modules": "01234",
      "background": "5",
      "tmpColor": "FF9900",
      "tmpSize": "16",
      "cityColor": "FFFFFF",
      "citySize": "16",
      "aqiColor": "FFFFFF",
      "aqiSize": "16",
      "weatherIconSize": "24",
      "alertIconSize": "18",
      "padding": "10px 10px 10px 10px",
      "shadow": "0",
      "language": "auto",
      "borderRadius": "5",
      "fixed": "true",
      "vertical": "top",
      "horizontal": "left",
      "left": "110",
      "top": "9",
      "key": "密钥"
    }
}

```

主题引入

```js
  #天气插件
     - <script src="/js/weather.js" async></script>
      - <script src="https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0" async></script>
```

![image-20221115155241213](https://moonshuo.cn//images/202211151552261.png)

打开...\themes\butterfly\layout\includes\header\nav.pug文件

我们找到下面的这一行代码，添加以下代码，那个+号后面是我们需要添加的，添加的时候将+号去除，<font color='red'>因为博主对这个进行魔改过，这里就不贴出文件全部了，大家可以在文件里面不同位置多尝试，会发现这个效果会出现在菜单，搜索栏等等位置，大家选择自己的位置即可</font>

```css
nav#nav
  span#blog_name
    a#site-name(href=url_for('/')) #[=config.title]
 + <div id="he-plugin-simple"></div>
```

### 文件调整

在调整完毕之后，我们可能会发现这个图标的位置不正确，我们打开weather.js文件，或者位置不符合我们的预期，我们通过调整js文件中的left与top的大小分别调整与左边和上面的边距

![image-20221115164113887](https://moonshuo.cn//images/202211151641923.png)

## 心知天气

### 注册

大概的步骤差不多，打开下面的网址，没有注册的进行注册，有的话在产品管理界面进行申请免费版，然后配置我们的插件类型，大家可以根据喜好进行选择

https://www.seniverse.com/products?iid=dc367050-c117-4a04-a81f-ac94849d7dd5

![image-20221115221520565](https://moonshuo.cn//images/202211152219923.png)

### 配置

在weather.js中引入js代码，还是script标签内的，然后在主题文件中引入，最终打开..\themes\butterfly\layout\includes\header\nav.pug文件，在相应的位置粘贴对应的代码，位置大家也是可以选择

![image-20221115221809624](https://moonshuo.cn//images/202211152219931.png)

重新部署即可看到

# 最新文章

首先将下列的js代码复制到我们的自定义js文件中，<font color='red'>但是建议大家将这个js文件放在..\themes\butterfly\scripts\helpers这个目录下</font>，如果我们放在/source/js/的路径下，效果也是可以实现的，但是后台会由于加载顺序的问题，进行报错，这虽然无伤大雅，但是对于程序员来说，这个难以容忍，<font color='red'>注意如果大家放在了js路径下，是需要在主题文件中引入的，但是如果放在了helper文件下，则不需要引入</font>

```js
// 最新文章
hexo.extend.helper.register('newPost', function() {
    let name, time;
    hexo.locals.get('posts').map((item, index) => {
        if (index == 0) name = item.title, time = item.date
        else if (item.date > time) { name = item.title, time = item.date }
    });
    return name
})
```

打开..\themes\butterfly\layout\includes\mixins\post-ui.pug，添加以下的代码，为了防止大家将格式弄错误，下面贴上一张图

```css
mixin postUI(posts)
  - let newTitle= newPost()
  each article , index in page.posts.data
    .recent-post-item
      -
        let link = article.link || article.path
        let title = article.title || _p('no_title')
        const position = theme.cover.position
        let leftOrRight = position === 'both'
          ? index%2 == 0 ? 'left' : 'right'
          : position === 'left' ? 'left' : 'right'
        let post_cover = article.cover
        let no_cover = article.cover === false || !theme.cover.index_enable ? 'no-cover' : ''
      -
      if post_cover && theme.cover.index_enable
        .post_cover(class=leftOrRight)
          a(href=url_for(link) title=title)
            img.post_bg(src=url_for(post_cover) onerror=`this.onerror=null;this.src='`+ url_for(theme.error_img.post_page) + `'` alt=title)
      .recent-post-info(class=no_cover)
        if newTitle == title
           span(class=`newPost-${leftOrRight=='left'?'right':'left'}`) 最新
        a.article-title(href=url_for(link) title=title)= title
```

![image-20221117155441608](https://moonshuo.cn//images/202211171554719.png)

下面将css代码引入到我们的自定义css文件中，如果是新建立的，记得将在主题文件中引入，重新hexo g，s之后发现效果生效

```css
/* 最新文章图标 */
.newPost-left,
.newPost-right {
    position: absolute;
    top: 0;
    color: white;
    padding: 0 15px;
    background-color: #49b1f5;
    border-radius: 0 0 10px 10px;
}

.newPost-left {
    left: 15px;
}

.newPost-right {
    right: 15px;
}
```

# 参考文章



[Butterfly主题的一些侧边栏插件 | Ariasakaの小窝 (yisous.xyz)](https://yisous.xyz/posts/4ae2ec41/)

[butterfly天气插件 | 萌新源的小窝 (juncikeji.xyz)](https://blog.juncikeji.xyz/2022/08/24/header-weather/)

[Hexo在顶部增加天气小部件 | 花猪のBlog (cnhuazhu.top)](https://cnhuazhu.top/butterfly/2021/02/24/Hexo魔改/Hexo在顶部增加天气小部件/)

[几行代码实现最新文章标志 | Leonus](https://blog.leonus.cn/2022/newpost.html#新版本)