from pyjamas.Canvas2D import Canvas
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.DOM import getFirstChild
from pyjamas import Window
import math
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML
from pyjamas.ui.Label import Label
from __pyjamas__ import jsinclude
from pyjamas.ui.TabPanel import TabPanel


#Include the processing.js in the module scope
#jsinclude("processing.js")
#from __javascript__ import Processing # defined by processing.js

class Soma:
	def onModuleLoad(self):
		tabpanel = TabPanel()
		tabpanel.add(HTML("Modulo de introducao a matrizes"),"<h2>Modulo de introducao a Matrizes</h2>", True)
		tabpanel.add(HTML("Modulo de introducao a matrizes"),"<h2>Imat</h2>", True)
		tabpanel.add(HTML("Modulo de introducao a matrizes"),"<h2>Ajuda para usar a ferramenta</h2>", True)
		tabpanel.setSize("90%"," 70%")
		RootPanel().add(tabpanel)


#p = None
#radius = 50.0
#delay = 16

#def setup():
#    global p,radius,delay,X,Y,nX,nY
#    p.size(200,200)
#    p.strokeWeight( 10 )
#    p.frameRate( 15 )
#    X = p.width / 2
#    Y = p.width / 2
#    nX = X
#    nY = Y
#    line(4,6,90,59)
#    noLoop()

#class ProcessingCanvas(Canvas):
#    def __init__(self):
#        Canvas.__init__(self,0,0)
#        self.c = getFirstChild(self.getElement())
#        self.p = Processing(self.c)
#        global p
#        p = self.p
    
if __name__ == '__main__':
	app = MainPage()
	app.onModuleLoad()

