# Copyright (c) 2022, Greycube Technologies and contributors
# For license information, please see license.txt

import frappe

from frappe.model.document import Document
from frappe.utils import validate_email_address

class LibraryMember(Document):
	
	def before_save(self):
		check_email_id=validate_email_address(self.email, True)	  
		self.full_name = f"{self.first_name} {self.last_name}"


