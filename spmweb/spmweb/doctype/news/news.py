# -*- coding: utf-8 -*-
# Copyright (c) 2019, FinByz Tech Pvt Ltd and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.website.website_generator import WebsiteGenerator

class News(WebsiteGenerator):
	pass

def get_list_context(context=None):
	list_context = frappe._dict(
		title = _('News'),
		seo_title = 'News 123',
		order_by = "published_on desc",
		limit = 100
	)

	return list_context

