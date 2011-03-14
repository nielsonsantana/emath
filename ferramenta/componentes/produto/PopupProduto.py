from pyjamas import DOM
from pyjamas import Factory
from pyjamas import Window

from pyjamas.ui.PopupPanel import PopupPanel
from pyjamas.ui.Grid import Grid
from pyjamas.ui.HTML import HTML
from pyjamas.ui.Button import Button
from pyjamas.ui.FlexTable import FlexTable
from pyjamas.ui import HasHorizontalAlignment,HasVerticalAlignment
from pyjamas.ui.Label import Label
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.PushButton import PushButton
from pyjamas.ui.CheckBox import CheckBox
from pyjamas.ui.ListBox import ListBox
from pyjamas.ui.Image import Image
from pyjamas.ui.DialogBox import DialogBox
from pyjamas.Canvas2D import Canvas
import pyjslib
from __pyjamas__ import JS
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel

def PararAnimacao():
    JS(""" 
        p = window.parent.Processing.getInstanceById('soma');
        if(p){
            p.background(200);
            p.noLoop();
        }
        window.parent.Processing.removeInstance('soma');
    
    """)
def IniciarAnimacaoAutomatica(sender):
    JS(""" 
        window.parent.init();
        setTimeout("window.parent.pausarAnim('soma');",1000);
    """)
def IniciarAnimacaoPassoAPasso(sender):
    JS(""" 
        window.parent.init();    
    """)
def desfazerProxOperacao(sender):
    JS(""" 
        p = window.parent.Processing.getInstanceById('soma');
        if(p){
            p.undraw();
        }    
    """)
    
def fazerProxOperacao(sender):
    JS(""" 
        p = window.parent.Processing.getInstanceById('soma');
        if(p){
            p.draw();
        }
    """)

class PopupProduto(PopupPanel):
    def __init__(self, autoHide=None, modal=True, **kwargs):
        
        PopupPanel.__init__(self, autoHide, modal, **kwargs)
        
        datasource = None
        id = None
        
        if kwargs.has_key("datasrc"):
            datasource = kwargs["datasrc"]
        if kwargs.has_key("id"):
            id = kwargs["id"]

        self.setSize(Window.getClientWidth()-50, Window.getClientHeight()-50)
        self.setPopupPosition(20, 0)
        DOM.setAttribute(self, "align","center")
        
        #self.dbProxInstrucao = DialogBox()
        #self.dbProxInstrucao.setHTML("Alow")
        #botton = Button("Ok")
        #botton.addClickListener(self.onCloseDialog)
        #self.dbProxInstrucao.setWidget(botton)

        self.caption = HTML()
        self.child = None
        self.setHTML("<b>Multiplicação de Matrizes.</b>")
        
        self.dragging = False
        self.dragStartX = 0
        self.dragStartY = 0
        
        self.imageFechar = Image("images/fechar.gif",Size=("32px","32px"), StyleName="gwt-ImageButton")
        self.imgbtnDesfazer = Image("images/previous-arrow.png",Size=("32px","20px"), StyleName="gwt-ImageButton")
        self.imgbtnFazer = Image("images/next-arrow.png",Size=("32px","20px"), StyleName="gwt-ImageButton")
#        self.imgbtnDesfazer.addClickListener(desfazerProxOperacao)
#        self.imgbtnFazer.addClickListener(fazerProxOperacao)
        
        self.btnAutomatic = Button("Automático",self.onIniciarAnimacaoAutomatica)
        self.btnInterativo = Button("Interativo")
        self.btnStepByStep = Button("Passo a passo",self.onIniciarAnimacaoPassoAPasso)
        self.btnFazer = Button("fazer >>", fazerProxOperacao)
        #self.btnFazer.setEnabled(False);
        self.btnDesfazer = Button("<< desfazer",desfazerProxOperacao)
        #self.btnDesfazer.setEnabled(False);
        self.btnFechar = PushButton(imageFechar,imageFechar)
        self.btnTestarResposta = Button("Testar Solução")
        self.lbVelocidade = ListBox()
        self.lbVelocidade.setID("lbseg")

        self.lbVelocidade.addItem("0.5 segundo", value=2)
        self.lbVelocidade.addItem("1 segundo", value=1)
        self.lbVelocidade.addItem("2 segundos", value=0.5)
        self.lbVelocidade.addItem("3 segundos", value=1/3)
        self.lbVelocidade.addItem("4 segundos", value=0.25)
        self.lbVelocidade.addItem("5 segundos", value=0.20)
        self.lbVelocidade.addItem("6 segundos", value=0.167)
        self.lbVelocidade.addItem("7 segundos", value=0.143)
        self.lbVelocidade.addItem("8 segundos", value=0.125)
        self.lbVelocidade.addItem("10 segundos", value=0.1)
        self.lbVelocidade.addItem("15 segundos", value=0.0666)
        self.lbVelocidade.addItem("20 segundos", value=0.05)
        
        lblinha1 = ListBox()
        lblinha1.setID("lm1")
        lblinha1.addItem("1", value=1); lblinha1.addItem("2", value=2)
        lblinha1.addItem("3", value=3); lblinha1.addItem("4", value=4)
        #lblinha1.addItem("5", value=5)
        
        lblinha2 = ListBox()
        lblinha2.setID("lm2")
        lblinha2.addItem("1", value=1); lblinha2.addItem("2", value=2)
        lblinha2.addItem("3", value=3); lblinha2.addItem("4", value=4)
        #lblinha2.addItem("5", value=5)
        
        lbcoluna1 = ListBox()
        lbcoluna1.setID("cm1")
        lbcoluna1.addItem("1", value=1); lbcoluna1.addItem("2", value=2)
        lbcoluna1.addItem("3", value=3); lbcoluna1.addItem("4", value=4)
        lbcoluna1.addItem("5", value=5); 
        lbcoluna1.addItem("6", value=6);
        lbcoluna1.addItem("7", value=7);
        
        lbcoluna2 = ListBox()
        lbcoluna2.setID("cm2")
        lbcoluna2.addItem("1", value=1); lbcoluna2.addItem("2", value=2)
        lbcoluna2.addItem("3", value=3); lbcoluna2.addItem("4", value=4)
        lbcoluna2.addItem("5", value=5); 
        lbcoluna2.addItem("6", value=6);
        lbcoluna2.addItem("7", value=7);
        
        
        self.lblStatus = Label("Label para Status")
        
        #Eventos
        self.imageFechar.addClickListener(self.onFecharPopup)
        
        #Cabeçalho da poupPanel
        self.grid = Grid(1,16)
        self.grid.setWidth(self.getWidth())
        self.grid.setHTML(0, 0, "<b>Matriz 1:</b> Nº Linhas:")
        self.grid.setWidget(0, 1, lblinha1)
        self.grid.setText(0, 2, "Nº Colunas:")
        self.grid.setWidget(0, 3, lbcoluna1)
        self.grid.setHTML(0, 4, "<b>Matriz 2:</b> Nº Linhas:")
        self.grid.setWidget(0, 5, lblinha2)
        self.grid.setText(0, 6, "Nº Colunas:")
        self.grid.setWidget(0, 7, lbcoluna2)
#        self.grid.setWidget(0, 3, self.txtColunas)
        self.grid.setWidget(0, 8, self.btnStepByStep)
        self.grid.setWidget(0, 9, self.btnDesfazer)
        self.grid.setWidget(0, 10, self.btnFazer)
        self.grid.setHTML(0, 11, "<b>Velocidade:</b>")
        self.grid.setWidget(0, 12, self.lbVelocidade)
        self.grid.setWidget(0, 13, self.btnAutomatic)
        #self.grid.setWidget(0, 14, self.btnInterativo)
        self.grid.setWidget(0, 15, self.imageFechar)
        #self.grid.setWidget(0, 7, self.btnFechar)
        self.grid.getCellFormatter().setAlignment(0,15, HasHorizontalAlignment.ALIGN_RIGHT, HasVerticalAlignment.ALIGN_TOP)
        
        self.panel = FlexTable(Height="100%", width="100%", BorderWidth="0",
                                CellPadding="0", CellSpacing="0")

        self.panel.setWidget(0, 0, self.caption)
        self.panel.setWidget(1, 0, self.grid)
        self.panel.getCellFormatter().setHeight(2, 0, "100%")
        self.panel.getCellFormatter().setWidth(2, 0, "100%")
        self.panel.getCellFormatter().setAlignment(2, 0, HasHorizontalAlignment.ALIGN_CENTER, HasVerticalAlignment.ALIGN_TOP)
        self.panel.setID("contetepopup")
        
        painelhorizontal = HorizontalPanel()
        gridinterativa = FlexTable()
        
        painelhorizontal.add(HTML("<canvas id='%s' datasrc='%s' width='%s' height='%s' style='image-rendering: optimizespeed !important; '></canvas>"
                           % ( "soma", datasource, "1000px", "500px")))
        
        ftInterativo = FlexTable(Height="100%", width="100%", BorderWidth="0",
                                CellPadding="0", CellSpacing="0")
        
        gridinterativa = Grid(4,4)
        gridinterativa.setWidget(0,0, HTML("<b>M1(</b><input type='text' class='gwt-TextBox' id='linha1' style='width: 25px; height:20px;' maxLength='1'><b> , </b>"))
        
        gridinterativa.setWidget(0,1, HTML("<input type='text' class='gwt-TextBox' id='coluna1' style='width: 25px;height:20px;' maxLength='1'><b>)&nbsp;+</b>"))
        
        gridinterativa.setWidget(0,2, HTML("<b>M2(</b>&nbsp;<input type='text' class='gwt-TextBox' id='linha2' style='width: 25px; height:20px;' maxLength='1'><b> , </b>"))
        
        gridinterativa.setWidget(0,3, HTML("<input type='text' class='gwt-TextBox' id='coluna2' style='width: 25px; height:20px;' maxLength='1'><b>)&nbsp;=</b>"))
        
        gridinterativa.setWidget(2,0, HTML("&nbsp;&nbsp;<b>(</b><input type='text' class='gwt-TextBox' id='n1' style='width: 25px; height:20px;' maxLength='1'><b>)&nbsp;+</b>"))
        
        gridinterativa.setWidget(2,1, HTML("<b>(</b><input type='text' class='gwt-TextBox' id='n2' style='width: 25px; height:20px;' maxLength='1'><b>)</b>"))
        
        gridinterativa.setWidget(2,2, HTML("<b>=&nbsp;</b>&nbsp;<input type='text' class='gwt-TextBox' id='solucao' style='width: 25px; height:20px;' maxLength='1'>"))
    
        ftInterativo.setHTML(0, 0, "</br>")
        ftInterativo.setHTML(1, 0, "<b><h3>Painel Interativo<h3></b>")
        #ftInterativo.setWidget(2, 0, self.btnInterativo)
        ftInterativo.setWidget(3, 0, gridinterativa)
        ftInterativo.setWidget(4,0,self.btnTestarResposta)
        ftInterativo.setHTML(5, 0, "</br>")
        ftInterativo.setHTML(6, 0, "Use a tecla tab para agilizar.")
        
        ftInterativo.getCellFormatter().setAlignment(4,0, HasHorizontalAlignment.ALIGN_CENTER, HasVerticalAlignment.ALIGN_TOP)
        ftInterativo.getCellFormatter().setAlignment(1,0, HasHorizontalAlignment.ALIGN_CENTER, HasVerticalAlignment.ALIGN_TOP)
        
        #painelhorizontal.add(ftInterativo)
        
        self.panel.setWidget(2, 0, painelhorizontal)
        
        self.panel.setWidget(3, 0, self.lblStatus)
        
        self.panel.setStyleName("dialogContent")

        PopupPanel.setWidget(self, self.panel)

        self.setStyleName("gwt-DialogBox")
        self.caption.setStyleName("Caption")
        self.caption.addMouseListener(self)

        #self.txtlm1.setFocus(True);
        
        
        
    def onFecharPopup(self, event):
        self.hide()
        PararAnimacao()

    def onIniciarAnimacaoPassoAPasso(self, event):
        self.btnFazer.setEnabled(True)
        self.btnDesfazer.setEnabled(True)
        
        if self.validarParametrosMatriz():
            IniciarAnimacaoPassoAPasso()
    
    def onIniciarAnimacaoAutomatica(self, event):
        
        if self.validarParametrosMatriz():
            IniciarAnimacaoAutomatica()
    
	def onTestarSolucao(self, event):
		pass
		#if self.validarParametrosMatriz():
			
    
    #def onCloseDialog(self, event):
        #self.dbProxInstrucao.hide()
         
    #def onOpenDialog(self, event):
        #self.dbProxInstrucao.show() 
    
    def validarParametrosTestarSolucao():
		lm1 = DOM.getElementById("linha1");
		lm1 = lm1.value
		cm1 = DOM.getElementById("coluna1");
		cm1 = cm1.value
		lm2 = DOM.getElementById("linha2");
		lm2 = lm2.value
		cm2 = DOM.getElementById("coluna2");
		cm2 = cm2.value
		
	
    def validarParametrosMatriz():
        lm1 = DOM.getElementById("lm1");
        lm1 = lm1.value
        cm1 = DOM.getElementById("cm1");
        cm1 = cm1.value
        lm2 = DOM.getElementById("lm2");
        lm2 = lm2.value
        cm2 = DOM.getElementById("cm2");
        cm2 = cm2.value 
        
        if ( lm2 != cm1): 
            Window.alert("A quantidade de colunas da matriz M1 deve ser igual a quantidade de colunas da matriz M2 para operação de multiplicação.");
            return False;
        
        #if ( not lm1 or  not lm2): 
            #Window.alert("Informe o numero de linhas da matriz M1 e M2.");
            #return False;
            
        #if (lm1 != lm2):
            #Window.alert("A quantidade de linhas da matriz M1 deve ser igual a da matriz M2 para operação de soma.");
            #return False;
        
        #if lm1>"5" or lm2>"5" or len(lm1)!=1 or len(lm2)!=1:
            #Window.alert("A quantidade de linhas da matriz M1 e da matriz M2, deve ser menor ou igual a 5.");
            #return False;
        
        #if ( not cm1 or  not cm2): 
            #Window.alert("Informe o numero de colunas da matriz M1 e M2.");
            #return False;
            
        #if (cm1 != cm2):
            #Window.alert("A quantidade de colunas da matriz M1 deve ser igual a da matriz M2 para operação de soma.");
            #return False;
        
        #if cm1>"7" or cm2>"7" or len(cm1)!=1 or len(cm2)!=1:
            #Window.alert("A quantidade de colunas da matriz M1 e da matriz M2, deve ser menor ou igual a 7.");
            #return False;
        return True;
    
    def getHTML(self):
        return self.caption.getHTML()

    def getText(self):
        return self.caption.getText()

    def onEventPreview(self, event):
        # preventDefault on mousedown events, outside of the
        # dialog, to stop text-selection on dragging
        type = DOM.eventGetType(event)
        if type == 'mousedown':
            target = DOM.eventGetTarget(event)
            elem = self.caption.getElement()
            event_targets_popup = target and DOM.isOrHasChild(elem, target)
            if event_targets_popup:
                DOM.eventPreventDefault(event)
        return PopupPanel.onEventPreview(self, event)

    def onMouseDown(self, sender, x, y):
        self.dragging = True
        DOM.setCapture(self.caption.getElement())
        self.dragStartX = x
        self.dragStartY = y

    def onMouseMove(self, sender, x, y):
        if self.dragging:
            absX = x + self.getAbsoluteLeft()
            absY = y + self.getAbsoluteTop()
            self.setPopupPosition(absX - self.dragStartX, absY - self.dragStartY)

    def onMouseUp(self, sender, x, y):
        self.dragging = False
        DOM.releaseCapture(self.caption.getElement())
    
    def onMouseLeave(self, self,x, y):
        pass
    
    def onMouseEnter(self, self,x, y):
        pass

    def remove(self, widget):
        if self.child != widget:
            return False

        self.panel.remove(widget)
        self.child = None
        return True

    def setHTML(self, html):
        self.caption.setHTML(html)

    def setText(self, text):
        self.caption.setText(text)

    def doAttachChildren(self):
        PopupPanel.doAttachChildren(self)
        self.caption.onAttach()

    def doDetachChildren(self):
        PopupPanel.doDetachChildren(self)
        self.caption.onDetach()

    def setWidget(self, widget):
        if self.child is not None:
            self.panel.remove(self.child)

        if widget is not None:
            self.panel.setWidget(1, 0, widget)

        self.child = widget
