from pyjamas.Canvas2D import Canvas
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.DOM import getFirstChild
from pyjamas import Window
from pyjamas.ui.Button import Button
from pyjamas.ui.Image import Image
from pyjamas.ui.HTML import HTML
from pyjamas.ui.Label import Label
from pyjamas.ui.Grid import Grid
from pyjamas.ui.TabPanel import TabPanel
from pyjamas.ui.ToggleButton import ToggleButton
from pyjamas.ui.PushButton import PushButton
from pyjamas.ui.PopupPanel import PopupPanel
from pyjamas.ui.DialogBox import DialogBox
from pyjamas.ui.VerticalPanel import VerticalPanel
from PopupPagina import PopupPagina
from pyjamas import DOM
from componentes.soma.PopupSoma import PopupSoma
from componentes.subtracao.PopupSub import PopupSub
from componentes.produtoescalar.PopupEscalar import PopupEscalar
from componentes.produto.PopupProduto import PopupProduto

def initCanvas():
    JS("""window.parent.init();""")
def AnimacaoSoma():
    JS("""p = window.parent.Processing.getInstanceById('soma'); p.loop();""")
#def AnimacaoSub():
#    JS("""p = window.parent.Processing.getInstanceById('soma'); p.loop(); """)
#def AnimacaoMult():
#    JS("""p = window.parent.Processing.getInstanceById('soma'); p.loop(); """)
#def AnimacaoEscalar():
#    JS("""p = window.parent.Processing.getInstanceById('soma'); p.loop(); """)

#jsinclude("processing.js")
#from __javascript__ import Processing # defined by processing.js
#Window.alert(Processing)

class MainPage:
    def onModuleLoad(self):
        self.popupsubtraca = PopupSub(id="sub",datasrc="fsubtracao.pjs")
        self.popupsoma = PopupSoma(id="soma",datasrc="fsoma.pjs")
        self.popupmultescalar = PopupEscalar(id="escalar",datasrc="fmultescalar.pjs")
        self.popupmult = PopupProduto(id="mult",datasrc="fmult.pjs")
        self.popupsoma.iniciado = False;

        tabpanel = TabPanel()
        grid = Grid(4,2)
        imgbtnSoma =  Image("images/Soma_Matriz_sum_matrix.png",StyleName="gwt-ImageButton")
        imgbtnSubtracao =  Image("images/subtracao_Matriz_subtract_matrix.png",StyleName="gwt-ImageButton")
        imgbtnMultiplicacao =  Image("images/multiplicacao_Matriz_product_matrix.png",StyleName="gwt-ImageButton")
        imgbtnMultiplicacaoPorEscalar =  Image("images/multiplicacao_por_escalar.png",StyleName="gwt-ImageButton")
        
        #eventos
        imgbtnSoma.addClickListener(self.onSomaButtonClick)
        imgbtnSubtracao.addClickListener(self.onSubtracaoButtonClick)
        imgbtnMultiplicacao.addClickListener(self.onMultiplicacaoButtonClick)
        imgbtnMultiplicacaoPorEscalar.addClickListener(self.onMulPorEscalarButtonClick)
        
        contents = VerticalPanel()
        contents.setSpacing(4)
        contents.add(HTML('You can place any contents you like in a dialog box.'))
        
        grid.setWidget(0,0,imgbtnSoma)
        grid.setWidget(0,1,imgbtnSubtracao)
        grid.setWidget(2,0,imgbtnMultiplicacao)
        grid.setWidget(2,1,imgbtnMultiplicacaoPorEscalar)
        
        grid.setStyleName(element)
        tabpanel.add(HTML("Modulo de introducao a matrizes"),"<h2>Modulo de introducao a Matrizes</h2>", True)
        tabpanel.add(grid,"<h2>  Matrizes  </h2>", True)
        tabpanel.add(HTML("Modulo de introducao a matrizes"),"<h2>Ajuda para usar a ferramenta</h2>", True)
        tabpanel.setSize("90%"," 70%")
        
        tabpanel.selectTab(1)
        #self.popupsoma.show()
        
        RootPanel("conteudo").add(tabpanel)

    def onSomaButtonClick(self,event):
        self.popupsoma.show()
#        if self.popupsoma.iniciado:
#            AnimacaoSoma()
#        initCanvas()
#        self.popupsoma.iniciado = True
#        AnimacaoSoma()

    def onSubtracaoButtonClick(self,event):
        self.popupsubtraca.show()
#        initCanvas()
#        AnimacaoSub()
    
    def onMulPorEscalarButtonClick(self,event):
        self.popupmultescalar.show()
#        initCanvas()
#        AnimacaoEscalar()
    
    def onMultiplicacaoButtonClick(self,event):
        self.popupmult.show()
#        initCanvas()
#        AnimacaoMult()

    
if __name__ == '__main__':
	app = MainPage()
	app.onModuleLoad()
