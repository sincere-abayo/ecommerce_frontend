<?php

// create class
class student

{
    /* 
    propeerty
    */
    public $name;
    public $regno;
    public $id;


    public function __construct($name, $regno, $id)
    {
        $this->name = $name;
        $this->regno = $regno;
        $this->id = $id;
    }

    // function to display 
    
    public function getDetails()
    {
        echo "name is  $this->name </br />";
        echo "name is $this->regno </br />";
        echo "name is $this->id </br />";
    }
    
    public function getName()
    {
        return $this->name;
    }

}

$student = new student("john doe", "22RP00987", 05);

$student->getDetails();

$name = $student->getName();

echo $name;
