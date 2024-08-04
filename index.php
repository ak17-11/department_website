<!DOCTYPE html>
<html lang="en">

<head>
  <title>DCSA</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    />
    <link rel="stylesheet" href="css\bootsrap\bootstrap.min.css" />
    <link rel="stylesheet" href="css/style.css">
  </head>

<body>
    <?php include 'php/01_header.php'; ?>
    <?php include 'php/02_main.php'; ?>
    <div class="container-fluid">
      <div class="row m-3 mt-5">
        <?php include 'php/03_about.php'; ?>
        <?php include 'php/03_notice.php'; ?>
        <?php include 'php/03_courses.php'; ?>
        <?php include 'php/03_faculty.php'; ?>
        <?php include 'php/03_contact.php'; ?>
      </div>
    </div>

    <?php include 'php/04_footer.php'; ?>

    <script src="javascript/index.js"></script>
    <script src="javascript\bootstrap\bootstrap.bundle.min.js"></script>
</body>

</html>