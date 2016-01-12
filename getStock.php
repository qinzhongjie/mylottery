<?php
	$stockArray = [];
	for($i=1;$i<100;$i++){
		$code = $i;
		$name = "username".$i;
		$tell = '1809342610'.$i;
		$time = '2016.1.'.$i;
		$stock = array("code"=>$code,"name"=>$name,"tell"=>$tell,"time"=>$time);
		array_push($stockArray,$stock);
	}
	echo json_encode($stockArray);	
?>