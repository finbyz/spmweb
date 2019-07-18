from __future__ import unicode_literals
import frappe

no_cache = 1
no_sitemap = 1

def get_context(context):
	data = frappe.get_all('Item', fields=['name', 'item_name','item_group', 'description', 'image','route'],
			filters={'show_in_website': 1})
	return {'doc':data}