from __future__ import unicode_literals
import frappe

no_cache = 1
no_sitemap = 1

def get_context(context):
	data=frappe.db.sql("""
	select item.item_code,item.item_name,item.item_group,wi.description,item.image,wi.route,wi.website_image
	from `tabItem` as item
	join `tabWebsite Item` as wi where wi.item_code=item.item_code and item.show_in_website = 1
	""",as_dict=1)
	# data = frappe.get_all('Website Item', fields=['item_code', 'item_name','item_group', 'description', 'image','route'],
	# 		filters={'published': 1})

	return {'doc':data}