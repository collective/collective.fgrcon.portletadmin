//
function get_portletmanagers(tcont, sid){
	var val = $('#p-'+tcont+'-'+sid).val();
	tsel = '#sel-'+tcont+'-'+sid;
	$.ajax({url: "@@avail-portlet-managers?tcont=" + tcont,async: false, success:
	   function(result){
            $(tsel).html(result);
        }});
}
