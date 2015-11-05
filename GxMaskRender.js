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
		VMasker(document.querySelector('#'+this.AttachControl)).maskPattern(this.Picture);
	}
	
	
	
	this.removeMask = function(el)
    {
		VMasker(document.querySelector('#'+this.AttachControl)).unMask();
	}
		
	
	///UserCodeRegionEnd: (do not remove this comment.):
}
