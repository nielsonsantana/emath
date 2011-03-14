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
from __pyjamas__ import jsinclude
import pyjslib
from __pyjamas__ import JS, doc
import dynamic

#p = Processing.getInstanceById('soma'); 
#p.noLoop();
#alert(window.parent.Processing);
def PararAnimacao():
    JS(""" 
        p = window.parent.Processing.getInstanceById('soma');
        if(p){
            p.background(125);
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

#from __javascript__ import test_fn
class PopupPagina(PopupPanel):
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
        
        self.dbProxInstrucao = DialogBox()
        self.dbProxInstrucao.setHTML("Alow")
        botton = Button("Ok")
        botton.addClickListener(self.onCloseDialog)
        self.dbProxInstrucao.setWidget(botton)

        self.caption = HTML()
        self.child = None
        self.setHTML("<b>Soma de Matrizes.</b>")
        
        self.dragging = False
        self.dragStartX = 0
        self.dragStartY = 0
        
        self.imageFechar = Image("images/fechar.gif",Size=("32px","32px"))
        self.imageFechar.setStyleName("gwt-ImageButton")
        
        self.btnAutomatic = Button("Automatico",self.onIniciarAnimacaoAutomatica)
        self.btnStepByStep = Button("Passo a passo",self.onIniciarAnimacaoPassoAPasso)#self.onOpenDialog)#
        self.btnFazer = Button("fazer >>", fazerProxOperacao)
        self.btnFazer.setEnabled(False);
        self.btnDesfazer = Button("desfazer <<",desfazerProxOperacao)
        self.btnDesfazer.setEnabled(False);
        self.btnFechar = PushButton(imageFechar,imageFechar)
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
        
        self.lblStatus = Label("Label para Status")
        
        #Eventos
        self.imageFechar.addClickListener(self.onFecharPopup)
        
        #Cabeçalho da poupPanel
        self.grid = Grid(1,15)
        self.grid.setWidth(self.getWidth())
        self.grid.setHTML(0, 0, "<b>Matriz 1:</b> Nº Linhas:")
        self.grid.setHTML(0, 1, "<input type='text' class='gwt-TextBox' id='lm1' style='width: 50px;'>")
        self.grid.setText(0, 2, "Nº Colunas:")
        self.grid.setHTML(0, 3, "<input type='text' class='gwt-TextBox' id='cm1' style='width: 50px;'>")
        self.grid.setHTML(0, 4, "<b>Matriz 2:</b> Nº Linhas:")
        self.grid.setHTML(0, 5, "<input type='text' class='gwt-TextBox' id='lm2' style='width: 50px;'>")
        self.grid.setText(0, 6, "Nº Colunas:")
        self.grid.setHTML(0, 7, "<input type='text' class='gwt-TextBox' id='cm2' style='width: 50px;'>")
#        self.grid.setWidget(0, 3, self.txtColunas)
        self.grid.setWidget(0, 8, self.btnStepByStep)
        self.grid.setWidget(0, 9, self.btnDesfazer)
        self.grid.setWidget(0, 10, self.btnFazer)
        self.grid.setHTML(0, 11, "<b>Velocidade:</b>")
        self.grid.setWidget(0, 12, self.lbVelocidade)
        self.grid.setWidget(0, 13, self.btnAutomatic)
        self.grid.setWidget(0, 14, self.imageFechar)
        #self.grid.setWidget(0, 7, self.btnFechar)
        self.grid.getCellFormatter().setAlignment(0,14, HasHorizontalAlignment.ALIGN_RIGHT, HasVerticalAlignment.ALIGN_TOP)
        
        self.panel = FlexTable(Height="100%", width="100%", BorderWidth="0",
                                CellPadding="0", CellSpacing="0")

        self.panel.setWidget(0, 0, self.caption)
        self.panel.setWidget(1, 0, self.grid)
        self.panel.getCellFormatter().setHeight(2, 0, "100%")
        self.panel.getCellFormatter().setWidth(2, 0, "100%")
        self.panel.getCellFormatter().setAlignment(2, 0, HasHorizontalAlignment.ALIGN_CENTER, HasVerticalAlignment.ALIGN_TOP)
        self.panel.setID("contetepopup")

        self.panel.setHTML(2, 0, ("<canvas id='%s' datasrc='%s' width='%s' height='%s' style='image-rendering: optimizespeed !important; '></canvas>")
                           % ( "soma", datasource, "1100px", "500px"))
        
        self.panel.setWidget(3, 0, self.lblStatus)
        
        self.panel.setStyleName("dialogContent")

        PopupPanel.setWidget(self, self.panel)

        self.setStyleName("gwt-DialogBox")
        self.caption.setStyleName("Caption")
        self.caption.addMouseListener(self)
        
        
    def onFecharPopup(self, event):
        self.hide()
        PararAnimacao();

    def onIniciarAnimacaoPassoAPasso(self, event):
        self.btnFazer.setEnabled(True);
        self.btnDesfazer.setEnabled(True);
        
        if self.ValidarPagina():
            IniciarAnimacaoPassoAPasso();
    
    def onIniciarAnimacaoAutomatica(self, event):
        
        if self.ValidarPagina():
            IniciarAnimacaoAutomatica();

    def ValidarPagina():
        lm1 = DOM.getElementById("lm1");
        lm1 = lm1.value
        cm1 = DOM.getElementById("cm1");
        cm1 = cm1.value
        lm2 = DOM.getElementById("lm2");
        lm2 = lm2.value
        cm2 = DOM.getElementById("cm2");
        cm2 = cm2.value 
        if ( not lm1 or  not lm2): 
            Window.alert("Informe o numero de linhas da matriz M1 e M2.");
            return False;
            
        if (lm1 != lm2):
            Window.alert("A quantidade de linhas da matriz M1 deve ser igual a da matriz M2 para operação de soma.");
            return False;
        
        if lm1>"5" or lm2>"5" or len(lm1)!=1 or len(lm2)!=1:
            Window.alert("A quantidade de linhas da matriz M1 e da matriz M2, deve ser menor ou igual a 5.");
            return False;
        
        if ( not cm1 or  not cm2): 
            Window.alert("Informe o numero de colunas da matriz M1 e M2.");
            return False;
            
        if (cm1 != cm2):
            Window.alert("A quantidade de colunas da matriz M1 deve ser igual a da matriz M2 para operação de soma.");
            return False;
        
        if cm1>"7" or cm2>"7" or len(cm1)!=1 or len(cm2)!=1:
            Window.alert("A quantidade de colunas da matriz M1 e da matriz M2, deve ser menor ou igual a 7.");
            return False;
        return True;
        
    def onCloseDialog(self, event):
        self.dbProxInstrucao.hide()
         
    def onOpenDialog(self, event):
        self.dbProxInstrucao.show() 
    
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
