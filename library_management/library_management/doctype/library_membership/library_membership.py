# Copyright (c) 2022, Greycube Technologies and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class LibraryMembership(Document):

	def validate(self):

		exists = frappe.db.exists(
			"Library Membership",
			{
				"library_member": self.library_member,
				# check for submitted documents
				"docstatus": 0,
				# check if the membership's end date is later than this membership's start date
				"to_date": (">", self.from_date),
			},
		)
		if exists:
			frappe.throw("There is an active membership for this member")

@frappe.whitelist()
def send_details_with_parameter(library_member,from_date,to_date,paid):
	print('library_member,from_date,to_date,paid')		
	print(library_member,from_date,to_date,paid)
	
@frappe.whitelist()
def send_details_with_doc(library_membership_name):
		data = frappe.get_doc("Library Membership",library_membership_name)
		print(data.name,data.library_member,data.from_date)