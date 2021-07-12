from __future__ import unicode_literals
import frappe
from frappe import _

def validate(self,method):
    if self.billing_address_gstin or self.customer_gstin:
        self.gst_category = "Registered Regular"
    else:
        self.gst_category = "Unregistered"