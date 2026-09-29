# 📚 Tecnopaper - Plataforma Web Modular (Flask)

Este proyecto es un prototipo modular de aplicación web para **Tecnopaper** (papelería, útiles escolares, regalos y servicios de soporte en TI), desarrollado como parte del programa de Tecnología en Informática de la **Corporación Universitaria Minuto de Dios (UNIMINUTO)**.

---

## 🛠️ Tecnologías Utilizadas

- **Lenguaje principal:** Python 3.11+
- **Framework Web:** Flask
- **Motor de Plantillas:** Jinja2 (Inheritance & Includes)
- **Frontend:** HTML5, CSS3, JavaScript

---

## 📁 Estructura del Proyecto

```text
Tecnopaper/
├── app.py                      # Servidor principal y definición de rutas
├── static/                     # Archivos estáticos
│   ├── css/
│   │   └── style.css           # Hoja de estilos corporativa
│   ├── js/
│   │   └── script.js            # Lógica cliente / interacción
│   └── img/                    # Imágenes y logo del proyecto
└── templates/                  # Plantillas Jinja2
    ├── base.html               # Plantilla estructural base
    ├── index.html              # Vista de Inicio
    ├── servicios.html          # Vista de Catálogo de Servicios
    ├── contacto.html           # Vista de Formulario de Contacto
    └── includes/               # Componentes modulares reutilizables
        ├── header.html
        ├── navbar.html
        └── footer.html