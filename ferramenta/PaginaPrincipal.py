from pyjamas.Canvas2D import Canvas
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.DOM import getFirstChild
from pyjamas import Window
import math
from pyjamas.ui.Button import Button
from pyjamas.ui.CustomButton import CustomButton
from pyjamas.ui.Image import Image
from pyjamas.ui.HTML import HTML
from pyjamas.ui.Label import Label
from pyjamas.ui.Grid import Grid
from __pyjamas__ import jsinclude
from pyjamas.ui.TabPanel import TabPanel
from componentes.soma import Soma
from pyjamas.ui.ToggleButton import ToggleButton
from pyjamas.ui.PushButton import PushButton
from pyjamas.ui.PopupPanel import PopupPanel
from pyjamas.ui.DialogBox import DialogBox
from pyjamas.ui.VerticalPanel import VerticalPanel
from PopupPagina import PopupPagina
from pyjamas import DOM
import pyjslib
from __pyjamas__ import JS, doc
import dynamic 
#Include the processing.js in the module scope

def initCanvas():
    #JS("""alert(document.getElementsByTagName("iframe")[0]);""")
    JS("""window.parent.init();""")

#jsinclude("processing.js")
#from __javascript__ import Processing # defined by processing.js
#Window.alert(Processing)
class MainPage:
    def onModuleLoad(self):
        self.popupsubtraca = PopupPagina(id="subtracaobutton",datasrc="fsubtracao.pjs")
        self.popupsoma = PopupPagina(id="soma",datasrc="fsoma.pjs")
        self.popupmultescalar = PopupPagina(id="escalar",datasrc="fmultescalar.pjs")
        self.popupmult = PopupPagina(id="mult",datasrc="fmult.pjs")
        #self.canvas =  Canvas(Window.getClientWidth()-200,Window.getClientHeight()-300)
        #DOM.setAttribute(self.canvas, "datasrc", "teste.pjs")
        
        self.dialogbbox = DialogBox()
        tabpanel = TabPanel()
        grid = Grid(4,2)
        imagemSoma =  Image("images/Soma_Matriz_sum_matrix.png")
        imagemSubtracao =  Image("images/subtracao_Matriz_subtract_matrix.png")
        imagemMultiplicacao =  Image("images/multiplicacao_Matriz_product_matrix.png")
        imagemMultiplicacaoPorEscalar =  Image("images/multiplicacao_por_escalar.png")
        
        somabutton = PushButton(imagemSoma,imagemSoma,getattr(self,"onSomaButtonClick"))
        subtracaobutton = PushButton(imagemSubtracao,imagemSubtracao,getattr(self,"onSubtracaoButtonClick"))
        multiplicacaobutton = PushButton(imagemMultiplicacao,imagemMultiplicacao,getattr(self,"onMultiplicacaoButtonClick"))
        MultiplicacaoPorEscalarbutton = PushButton(imagemMultiplicacaoPorEscalar,imagemMultiplicacaoPorEscalar,getattr(self,"onMulPorEscalarButtonClick"))
        
        somabutton.setWidth(325)
        subtracaobutton.setWidth(325)
        multiplicacaobutton.setWidth(325)
        MultiplicacaoPorEscalarbutton.setWidth(325)
        
        #Adicionando eventos
#        somabutton.addClickListener(getattr(self,"onSomaButtonClick"))
#        somabutton.addClickListener(getattr(self,"onMultiplicacaoButtonClick"))
#        somabutton.addClickListener(getattr(self,"onSubtracaoButtonClick"))
#        somabutton.addClickListener(getattr(self,"onMulPorEscalarButtonClick"))
        
        
        contents = VerticalPanel()
        contents.setSpacing(4)
        contents.add(HTML('You can place any contents you like in a dialog box.'))
        
        self.dialogbbox.setHTML('<b>Welcome to the dialog box</b>')
        self.dialogbbox.setTitle("ssssssssss");
        self.dialogbbox.setWidget(contents)
        
        grid.setWidget(0,0,somabutton)
        grid.setWidget(0,1,subtracaobutton)
        grid.setWidget(2,0,multiplicacaobutton)
        grid.setWidget(2,1,MultiplicacaoPorEscalarbutton)
        grid.setStyleName(element)
        tabpanel.add(HTML("Modulo de introducao a matrizes"),"<h2>Modulo de introducao a Matrizes</h2>", True)
        tabpanel.add(grid,"<h2>  eMath  </h2>", True)
        tabpanel.add(HTML("Modulo de introducao a matrizes"),"<h2>Ajuda para usar a ferramenta</h2>", True)
        tabpanel.setSize("90%"," 70%")
        
        RootPanel("conteudo").add(tabpanel)
        #dynamic.ajax_import("processing.js")

    def onSomaButtonClick(self,event):
        self.popupsoma.show()
        initCanvas()

    def onSubtracaoButtonClick(self,event):
        self.popupsubtraca.show()
        initCanvas()
    
    def onMulPorEscalarButtonClick(self,event):
        self.popupmultescalar.show()
        initCanvas()
    
    def onMultiplicacaoButtonClick(self,event):
        self.popupmult.show()
        initCanvas()

    
if __name__ == '__main__':
	app = MainPage()
	app.onModuleLoad()
