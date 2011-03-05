#-*- encoding: iso-8859-15 -*-

import os
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext.webapp import template
from google.appengine.ext import db

#class Usuario(db.Model):
#	nome = db.StringProperty(required = True)
#	datacadastro = db.DateTimeProperty(auto_now_add = True)

class MainPage(webapp.RequestHandler):
	def get(self):
		path = os.path.join(os.path.dirname(__file__), 'index.html')
		self.response.out.write(template.render(path, None))

class OrderAnimPage(webapp.RequestHandler):
	def get(self):
		self.response.out.write(template.render("InsertionSort.html",None))

app = webapp.WSGIApplication([('/', MainPage)],
							[('/InsertionSort.html', OrderAnimPage)])

def main():
	run_wsgi_app(app)

if(__name__=="__main__"):
	main()
