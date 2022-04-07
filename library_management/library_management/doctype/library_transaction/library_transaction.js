// Copyright (c) 2022, Greycube Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Transaction', {
	print_previous_data: function(frm){
		frappe.call(
			{
				method: "library_management.library_management.doctype.library_transaction.library_transaction.print_previous_data",
				args:{
					"library_member": frm.doc.library_member
				},
				callback: (r) => {
				console.log(r)
			}
				
			}
		)

	}

	
});


