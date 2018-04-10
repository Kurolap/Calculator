$(document).ready(function() {
	var result = '0';
	
	$('#Clear').click(function() {
		result = '0';	
		$('#result').text(result);
	});
	
	$('#Backspace').click(function() {
		result = result.slice(0, -1);	
		$('#result').text(result);
	});
	
	$('#One').click(function() {
		if (result === '0') {
			result = '1';
		} else {
			result = result + '1';	
		}			
		$('#result').text(result);
	});
	
	$('#Two').click(function() {
		if (result === '0') {
			result = '2';
		} else {
			result = result + '2';	
		}			
		$('#result').text(result);
	});
	
	$('#Three').click(function() {
		if (result === '0') {
			result = '3';
		} else {
			result = result + '3';	
		}			
		$('#result').text(result);
	});
	
	$('#Four').click(function() {
		if (result === '0') {
			result = '4';
		} else {
			result = result + '4';	
		}			
		$('#result').text(result);
	});
	
	$('#Five').click(function() {
		if (result === '0') {
			result = '5';
		} else {
			result = result + '5';	
		}			
		$('#result').text(result);
	});
	
	$('#Six').click(function() {
		if (result === '0') {
			result = '6';
		} else {
			result = result + '6';	
		}			
		$('#result').text(result);
	});
	
	$('#Seven').click(function() {
		if (result === '0') {
			result = '7';
		} else {
			result = result + '7';	
		}			
		$('#result').text(result);
	});
	
	$('#Eight').click(function() {
		if (result === '0') {
			result = '8';
		} else {
			result = result + '8';	
		}			
		$('#result').text(result);
	});
	
	$('#Nine').click(function() {
		if (result === '0') {
			result = '9';
		} else {
			result = result + '9';	
		}			
		$('#result').text(result);
	});
	
	$('#Zero').click(function() {
		if (result === '0') {
			result = '0';
		} else {
			result = result + '0';	
		}			
		$('#result').text(result);
	});
	
	
	$('#Plus').click(function() {
		result = result + '+'; 
		$('#result').text(result);	
	});
	
	$('#Minus').click(function() {
		result = result + '-'; 
		$('#result').text(result);	
	});
	
	$('#Multiply').click(function() {
		result = result + '*'; 
		$('#result').text(result);	
	});
		
	$('#Divide').click(function() {
		result = result + '/'; 
		$('#result').text(result);	
	});
	
	$('#L_bracket').click(function() {
		result = result + '('; 
		$('#result').text(result);	
	});
	
	$('#R_bracket').click(function() {
		result = result + ')'; 
		$('#result').text(result);	
	});
	
	$('#Dot').click(function() {
		result = result + '.'; 
		$('#result').text(result);	
	});
	
	$('#Equal').click(function() {
		try {
			result = eval(result);
		} catch (e) {
			return alert("The expression doesn't make sense");    
		}
		$('#result').text(result);
	});
	
		
});