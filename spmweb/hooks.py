# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "spmweb"
app_title = "Spmweb"
app_publisher = "FinByz Tech Pvt Ltd"
app_description = "Custom App For Website"
app_icon = "octicon octicon-device-desktop"
app_color = "orange"
app_email = "info@finbyz.com"
app_license = "GPL 3.0"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/spmweb/css/spmweb.css"
# app_include_js = "/assets/spmweb/js/spmweb.js"

# include js, css files in header of web template
# web_include_css = "/assets/spmweb/css/spmweb.css"
# web_include_js = "/assets/spmweb/js/spmweb.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "spmweb.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "spmweb.install.before_install"
# after_install = "spmweb.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "spmweb.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

doc_events = {
    "Sales Invoice":{
        "validate":"spmweb.api.validate"
    }
}
# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"spmweb.tasks.all"
# 	],
# 	"daily": [
# 		"spmweb.tasks.daily"
# 	],
# 	"hourly": [
# 		"spmweb.tasks.hourly"
# 	],
# 	"weekly": [
# 		"spmweb.tasks.weekly"
# 	]
# 	"monthly": [
# 		"spmweb.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "spmweb.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "spmweb.event.get_events"
# }

