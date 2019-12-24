  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@LucasJSmith">
  <meta name="twitter:creator" content="@LucasJSmith">
  <meta name="twitter:title" content= <?= "\"" . $page->title()->html() . " | " . $site->title() . "\"" ?> >
  <meta name="twitter:description" content= <?= "\"" . $page->text()->kirbytext()->excerpt(50, 'words') . "\"" ?> >
  <meta name="twitter:image" content= <?= "\"" .  $page->url() ."/" . $page->coverimage()->filename() . "\"" ?> >


  <!-- OpenGraph / Facebook card -->
  <meta property="og:title" content= <?= "\"" . $page->title()->html() . " | " . $site->title() . "\"" ?> >
  <meta property="og:type" content="website" />
  <meta property="og:url" content= <?= "\"" . $page->url() . "\"" ?> >
  <meta property="og:image" content= <?= "\"" .  $page->url() ."/" . $page->coverimage()->filename() . "\"" ?> >
  <meta property="og:description" content= <?= "\"" . $page->text()->kirbytext()->excerpt(50, 'words') . "\"" ?> >
