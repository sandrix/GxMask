function GxMask($)
{
	this.AttachControl;
	this.Picture;

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
		/*
		* Author: Daniel San Martin Pascal Filho
		* e-mail: daniel.smpf@gmail.com
		* Created at: 05/11/2015
		*/
		
		
		var control = this.AttachControl;
		
		this.addMask(control);
		jQuery(function($){
			try {		
				$('#'+control)[0].onblur = null;
				$('#'+control).bind('onblur',function(){
					VMasker(document.querySelector('#'+control)).unMask();
				});
			} catch (e) {
				console.error('Error: adding blur mask.')
			}
		});
		
		
		
		
		
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)

 	this.addMask = function(el)
    {

		switch(this.Picture){
			case 'telefone':
				var telMask = ['(99) 9999-99999', '(99) 99999-9999'];
				var tel = document.querySelector('#'+this.AttachControl);
				VMasker(tel).maskPattern(telMask[0]);
				tel.addEventListener('input', inputHandler.bind(undefined, telMask, 14), false);	
				break;
			case 'cpfcnpj':
				var docMask = ['999.999.999-999', '99.999.999/9999-99'];
				var doc = document.querySelector('#'+this.AttachControl);
				VMasker(doc).maskPattern(docMask[0]);
				doc.addEventListener('input', inputHandler.bind(undefined, docMask, 14), false);
				break;
			default:
				VMasker(document.querySelector('#'+this.AttachControl)).maskPattern(this.Picture);
		}
	}
	
	function inputHandler(masks, max, event) {
	  var c = event.target;
	  var v = c.value.replace(/\D/g, '');
	  var m = c.value.length > max ? 1 : 0;
	  VMasker(c).unMask();
	  VMasker(c).maskPattern(masks[m]);
	  c.value = VMasker.toPattern(v, masks[m]);
	}
	
	this.removeMask = function(el)
    {
		VMasker(document.querySelector('#'+this.AttachControl)).unMask();
	}
		
	
	///UserCodeRegionEnd: (do not remove this comment.):
}
