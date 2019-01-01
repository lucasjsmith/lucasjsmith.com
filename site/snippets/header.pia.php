<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">

  <?= css('assets/css/index.css') ?>
  <?= js('assets/js/welcome.js', true) ?>

    <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@LucasJSmith">
  <meta name="twitter:creator" content="@LucasJSmith">
  <meta name="twitter:title" content="Passenger Information Archive | LucasJSmith.com">
  <meta name="twitter:description" content="Documenting transit passenger information in the wild. In most cities, this includes a station-to-station video of onboard dynamic passenger information, along with other photos and commentary.">
  <meta name="twitter:image" content="https://www.lucasjsmith.com/images/171117_LRV4_Launch_181.jpg">

  <!-- OpenGraph / Facebook card -->
  <meta property="og:title" content="Passenger Information Archive | LucasJSmith.com" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.lucasjsmith.com/passenger-information-archive" />
  <meta property="og:image" content="https://www.lucasjsmith.com/images/171117_LRV4_Launch_181.jpg" />
  <meta property="og:description" content="Documenting transit passenger information in the wild. In most cities, this includes a station-to-station video of onboard dynamic passenger information, along with other photos and commentary.">


</head>
<body>

  <header class="header wrap wide" role="banner">
    <div class="grid">

      <div class="branding column">
        <a href="<?= url() ?>" rel="home"><?= $site->title()->html() ?></a>
      </div>

      <?php snippet('menu') ?>

    </div>
  </header>
