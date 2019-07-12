{% if include.primary %}
  {% assign classes="uk-panel uk-panel-box-primary uk-panel-box" %}
{% else %}
  {% assign classes="uk-panel uk-panel-box" %}
{% endif %}

### {{ include.title }}

<div class="uk-grid">
  <div class="uk-width-1">
    <div class="{{ classes }}">
      {{ include.content | markdownify }}

      {% if include.link.code.embed %}
        <script src="{{ include.link.code.embed }}"></script>
      {% endif %}

      {% if include.images.size == 0 %}
        {% include notice.html notice="There are no images for this example!" %}
      {% endif %}

      <div class="uk-grid uk-margin-top">
      {% for image in include.images %}
        <div class="uk-width-medium-1-3 uk-margin-bottom">
          <a
            href="/assets/images/examples/{{ image.href }}"
            data-uk-lightbox="{group: '{{ include.title | slugify }}'}"
            title="{{ image.title }}">
            <img class="uk-thumbnail" src="/assets/images/examples/{{ image.href }}">
          </a>
        </div>
      {% endfor %}
      </div>

      <div class="uk-flex uk-flex-right">
        {% if include.showDocs %}
        <a
          class="uk-button uk-button-primary uk-button-small uk-border-rounded uk-margin-left"
          href="{{ include.link.docs }}">
          View documentation
        </a>
        {% endif %}

        <!-- <a
          class="cofh-js-required uk-button uk-button-success uk-button-small uk-border-rounded uk-margin-right"
          href="#">
          Show/hide code
        </a> -->
        
        {% if include.link.code.download %}
        <a
          class="uk-button uk-button-success uk-button-small uk-border-rounded uk-margin-left"
          href="{{ include.link.code.download }}">
          Download code
        </a>
        {% endif %}
      </div>
    </div>
  </div>
</div>
