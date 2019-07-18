# -*- coding: utf-8 -*-
# Copyright (c) 2019, FinByz Tech Pvt Ltd and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.website.website_generator import WebsiteGenerator

class Video(WebsiteGenerator):
	pass

def get_list_context(context=None):
	list_context = frappe._dict(
		title = _('Video')
	)

	return list_context