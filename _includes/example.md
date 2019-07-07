
### {{ include.title }}

<div class="uk-grid">
  <div class="uk-width-1">
    <div class="uk-panel uk-panel-box uk-padding-bottom-remove">
      <div class="uk-flex uk-flex-right uk-flex-items-center">
        <div class="uk-flex">
          {% if include.primary %}
          <a
            class="uk-button uk-button-primary uk-button-small uk-border-rounded uk-margin-right"
            href="{{ include.link.docs }}">
            View documentation
          </a>
          {% endif %}

          <a
            class="cofh-js-required uk-button uk-button-success uk-button-small uk-border-rounded uk-margin-right"
            href="#">
            Show/hide code
          </a>
          
          {% if include.link.code.download %}
          <a
            class="uk-button uk-button-success uk-button-small uk-border-rounded"
            href="{{ include.link.code.download }}">
            Download code
          </a>
          {% endif %}
        </div>
      </div>

      {{ include.content | markdownify }}

      <div class="uk-grid uk-margin-top uk-margin-bottom">

      {% for image in include.images %}

        <div class="uk-width-medium-1-3">
          <a
            href="/assets/images/{{ image.href }}"
            data-uk-lightbox="{group: '{{ include.title | slugify }}'}"
            title="{{ image.title }}">
            <img class="uk-thumbnail" src="/assets/images/examples/{{ image.href }}">
          </a>
        </div>

      {% endfor %}
      </div>

      {% if include.link.code.embed %}
      <script src="{{ include.link.code.embed }}"></script>
      {% endif %}
    </div>
  </div>
</div>