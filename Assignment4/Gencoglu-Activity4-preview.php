<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preview</title>
</head>
<body>
    <?php
    if(empty($_POST['name']) == false )
    {
        echo $_POST['name']."<br/>";
    }
    else{
        echo "Name: Not Provided"."<br/>";
    }


    if(empty($_POST['username']) == false )
    {
        echo $_POST['username']."<br/>";
    }
    else{
        echo "Username:Not Provided"."<br/>";
    }


    if(empty($_POST['password']) == false )
    {
        echo $_POST['password']."<br/>";
    }
    else{
        echo "Password:Not Provided"."<br/>";
    }


    if(empty($_POST['address']) == false )
    {
        echo $_POST['address']."<br/>";
    }
    else{
        echo "Address:Not Provided"."<br/>";
    }

    if(empty($_POST['country']) == false )
    {
        echo $_POST['country']."<br/>";
    }
    else{
        echo "Country:Not Provided"."<br/>";
    }


    if(empty($_POST['zipcode']) == false )
    {
        echo $_POST['zipcode']."<br/>";
    }
    else{
        echo "ZİP code:Not Provided"."<br/>";
    }


    if(empty($_POST['email']) == false )
    {
        echo $_POST['email']."<br/>";
    }
    else{
        echo "Email:Not Provided"."<br/>";
    }


    if(empty($_POST['sex']) == false )
    {
        echo $_POST['sex']."<br/>";
    }
    else{
        echo "Sex:Not Provided"."<br/>";
    }


    if(!empty($_POST['checklist'])) {
    foreach($_POST['checklist'] as $check) {
            echo $check."<br/>";}
    }
    else{
        echo "Language:Not Provided"."<br/>";
    }


    if(empty($_POST['about']) == false )
    {
        echo $_POST['about']."<br/>";
    }
    else{
        echo "About:Not Provided"."<br/>";
    }

    ?>

</body>
</html>